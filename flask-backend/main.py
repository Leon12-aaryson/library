from flask import Flask
from flask_restx import Api, Resource, fields
from config import DevConfig
from models import Books
from exts import db

app = Flask(__name__)
app.config.from_object(DevConfig)

db.init_app(app)

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

@api.route('/hello')
class HelloResource(Resource):
    def get(self):
        return {"message": "Hello World"}

@api.route('/books')
class BooksResource(Resource):

    @api.marshal_list_with(books_model)
    def get(self):
        """Get all books from db"""
        books=Books.querry.all()
        return books
    
    def get(self):
        """Create books"""
        pass
    
@api.route('/books/<int:id>')
class BookResource(Resource):
    def get(self, id):
        """Get a book by id"""
        pass
    
    def put(self, id):
        """Update books by id"""
        pass
    
    def delete(self, id):
        """Delete books by id"""
        pass
    

@app.shell_context_processor
def make_shell_context():
    return {
        "db":db,
        "Books":Books
    }



if __name__ == '__main__':
    app.run(debug=False)