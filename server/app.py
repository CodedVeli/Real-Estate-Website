from flask import Flask, make_response, jsonify, request, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, User

app = Flask(__name__)

app.secret_key = b'ndchhacaewuhsncaxzxwxcdsac'
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///app.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

migrate = Migrate(app, db)

db.init_app(app)

api = Api(app)

class Login(Resource):
    def post(self):
        user = User.query.filter(
            User.username == request.get_json()['username']
        ).first()

        session['user_id'] = user.id
        return jsonify(user.to_dict())
    
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

if __name__ == '__main__':
    app.run(debug=True, port=5555)