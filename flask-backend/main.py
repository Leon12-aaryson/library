from flask import Flask, request, jsonify
from flask_restx import Api, Resource, fields
from config import DevConfig
from models import Books, User
from exts import db
from flask_migrate import Migrate
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, create_refresh_token, jwt_required

app = Flask(__name__)
app.config.from_object(DevConfig)

CORS(app)

db.init_app(app)
migrate = Migrate(app,db)
JWTManager(app)

api=Api(app,doc='/docs')


# model (serializer)
books_model = api.model(
    "Books",
    {
        "id":fields.Integer(),
        "title":fields.String(),
        "author":fields.String(),
        "description":fields.String()
    }
)

signup_model = api.model(
    "SignUp",
    {
        'id':fields.Integer(),
        'first_name':fields.String(),
        'last_name':fields.String(),
        'email':fields.String(),
        'password':fields.String()
    }
)

signin_model = api.model(
    "SignIn",
    {
        'email':fields.String(),
        'password':fields.String()
    }
)

@api.route('/hello')
class HelloResource(Resource):
    def get(self):
        return {"message": "Hello World"}


@api.route('/signup')
class SignUp(Resource):
    # @api.marshal_with(signup_model)
    @api.expect(signup_model)
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

    
@api.route('/login')
class SignIn(Resource):
    
    @api.expect(signin_model)
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


@api.route('/books', methods=['POST','GET'])
class BooksResource(Resource):

    @api.marshal_list_with(books_model)
    def get(self):
        """Get all books from db"""
        books=Books.query.all()
        return books
    
    @api.marshal_with(books_model)
    @api.expect(books_model)
    @jwt_required()
    def post(self):
        """Create books"""
        data=request.get_json()
        
        new_book = Books(
            title=data.get('title'),
            author=data.get('author'),
            description=data.get('description')
        )
        
        new_book.save()
        
        return new_book, 201
    
@api.route('/books/<int:id>')
class BookResource(Resource):
    
    @api.marshal_list_with(books_model)
    def get(self, id):
        """Get a book by id"""
        books=Books.query.get_or_404(id)
        
        return books
        
        
    @api.marshal_with(books_model)
    @jwt_required()
    def put(self, id):
        """Update books by id"""
        book_to_update=Books.query.get_or_404(id)
        
        data = request.get_json()
        book_to_update.update(data.get("title"),data.get("author"),data.get("description"))
        
        return book_to_update
    

    @api.marshal_with(books_model)
    @jwt_required()
    def delete(self, id):
        """Delete books by id"""
        book_to_delete=Books.query.get_or_404(id)
        
        book_to_delete.delete()
        
        return book_to_delete
    

@app.shell_context_processor
def make_shell_context():
    return {
        "db":db,
        "Books":Books
    }



if __name__ == '__main__':
    app.run(debug=False)