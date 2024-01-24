#!/usr/bin/env python3

from faker import Faker
from random import randint
from models import db, User, Property, Review
from app import app

fake = Faker()

with app.app_context():
    print("Deleting all records...")
    User.query.delete()
    Property.query.delete()
    Review.query.delete()

    print("Creating users...")
    users = []
    for i in range(30):
        user = User(
            name=fake.name(),
            email=fake.email(),
            password=fake.password(),
        )
        users.append(user)

    db.session.add_all(users)

    print("Creating properties...")
    properties = []
    for i in range(30):
        property = Property(
            name=fake.word(),
            type=fake.word(),
            user_id=randint(1, 30),  # Assuming you have 30 users
            bedrooms=randint(1, 5),
            bathrooms=randint(1, 3),
            parking=fake.boolean(),
            furnished=fake.boolean(),
            offer=fake.boolean(),
            regular_price=randint(1000, 5000),
            discounted_price=randint(800, 4500),
            location=fake.address(),
        )
        properties.append(property)

    db.session.add_all(properties)

    print("Creating reviews...")
    reviews = []
    for i in range(30):
        review = Review(
            property_id=randint(1, 30),  # Assuming you have 30 properties
            user_id=randint(1, 30),  # Assuming you have 30 users
            rating=randint(1, 5),
            comment=fake.text(),
        )
        reviews.append(review)

    db.session.add_all(reviews)

    db.session.commit()
    print("Complete.")
