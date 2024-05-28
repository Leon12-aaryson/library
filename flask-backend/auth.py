from flask import Flask, jsonify, make_response, request
from flask_restx import Namespace, Resource, fields
from models import User
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (JWTManager, create_access_token, 
                                get_jwt_identity, create_refresh_token, jwt_required)

auth_ns=Namespace('auth',description="A namespace for our authentication")

signup_model = auth_ns.model(
    "SignUp",
    {
        'id':fields.Integer(),
        'first_name':fields.String(),
        'last_name':fields.String(),
        'email':fields.String(),
        'password':fields.String()
    }
)

signin_model = auth_ns.model(
    "SignIn",
    {
        'email':fields.String(),
        'password':fields.String()
    }
)


@auth_ns.route('/signup')
class SignUp(Resource):
    # @auth_ns.marshal_with(signup_model)
    @auth_ns.expect(signup_model)
    def post(self):
        data=request.get_json()
        print(f"Incoming data: {data}")
        
        if not data:
            return {"message": "Invalid JSON"}, 400
        
        email=data.get('email')
        
        db_user=User.query.filter_by(email=email).first()
        
        if db_user is not None:
            return {"message": "User account already exists"}, 409
        
        if db_user is not None:
            return jsonify({"message":f"User account already exists"})
        
        try:
            new_user=User(
                first_name=data.get('first_name'),
                last_name=data.get('last_name'),
                email=data.get('email'),
                password=generate_password_hash(data.get('password'))
            )
            
            new_user.save()
            return jsonify({"message":"User created successfully"})
        
        except Exception as e:
            print(f"Error: {e}")
            return {"message": "Internal Server Error"}, 500
          
@auth_ns.route('/login')
class SignIn(Resource):
    
    @auth_ns.expect(signin_model)
    def post(self):
        data=request.get_json()
        
        email=data.get('email')
        password=data.get('password')
        
        db_user=User.query.filter_by(email=email).first()
        
        if db_user and check_password_hash(db_user.password, password):
            access_token=create_access_token(identity=db_user.email)
            refresh_token=create_refresh_token(identity=db_user.email)
            
            return jsonify({
                "access_token":access_token,
                "refresh_token": refresh_token
                })
@auth_ns.route('/refresh', methods=['POST'])
class RefreshResource(Resource):
#   @jwt_required(refresh=True)
  def post(self):
    
    current_user=get_jwt_identity()
    new_access_token=create_access_token(identity=current_user)
    
    return make_response(jsonify({"access_token":new_access_token}),200)