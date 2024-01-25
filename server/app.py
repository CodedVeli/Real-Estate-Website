from flask import Flask, make_response, jsonify, request, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, User, Property, Owner

app = Flask(__name__)

app.secret_key = b'ndchhacaewuhsncaxzxwxcdsac'
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///app.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

class Login(Resource):
    def post(self):
        try:
            data = request.get_json()
            name = data.get('name')  
            password = data.get('password')

            user = User.query.filter(User.name == name).first()

            if user and password:
                session['user_id'] = user.id
                return jsonify({
                    "message": "Login successful",
                    "user_id": user.id,
                    "username": user.name
                })
            else:
                return jsonify({"message": "Invalid name or password"}), 401
        except Exception as e:
            print(f"Error in Login: {e}")
            return make_response(jsonify({"message": "Internal Server Error"}), 500)


    
class CheckSession(Resource):
    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return jsonify(user.to_dict())
        else:
            return jsonify({'message': '401: Not Authorized'}), 401
        
class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        return jsonify({'message': '204: No Content'}), 204
    
class PropertyResource(Resource):
    def get(self, property_id=None):
        if property_id:
            house_data = Property.query.filter_by(id=property_id).first()
            if house_data:
                return {
                    'id': house_data.id,
                    'name': house_data.name,
                    'user_id': house_data.user_id,
                    'bedrooms': house_data.bedrooms,
                    'bathrooms': house_data.bathrooms,
                    'regular_price': house_data.regular_price,
                    'location': house_data.location,
                    'image': house_data.image
                }
            else:
                return {'message': 'Property not found'}, 404
        else:
            properties = Property.query.all()
            return [{'id': prop.id, 'name': prop.name} for prop in properties]

    def post(self):
        data = request.json
        new_property = Property(
            user_id=data['user_id'],
            name=data['name'],
            bedrooms=data['bedrooms'],
            bathrooms=data['bathrooms'],
            regular_price=data['regular_price'],
            location=data['location'],
            image=data['image']  
        )
        db.session.add(new_property)
        db.session.commit()
        return {'message': 'Property created successfully'}, 201

    def patch(self, property_id):
        property_data = Property.query.filter_by(id=property_id).first()
        if property_data:
            data = request.json
            property_data.user_id = data['user_id']
            property_data.name = data['name']
            property_data.bedrooms = data['bedrooms']
            property_data.bathrooms = data['bathrooms']
            property_data.regular_price = data['regular_price']
            property_data.location = data['location']
            property_data.image = data['image'] 
            return {'message': 'Property updated successfully'}
        else:
            return {'message': 'Property not found'}, 404



    def delete(self, property_id):
        property_data = Property.query.filter_by(id=property_id).first()
        if property_data:
            db.session.delete(property_data)
            db.session.commit()
            return {'message': 'Property deleted successfully'}
        else:
            return {'message': 'Property not found'}, 404
        
api.add_resource(PropertyResource, '/properties', '/properties/<int:property_id>')
api.add_resource(Login, '/login')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Logout, '/logout')

if __name__ == '__main__':
    app.run(debug=True, port=5555)