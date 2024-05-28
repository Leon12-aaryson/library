from flask_restx import Namespace, Resource, fields
from flask import request, jsonify, make_response
from models import Books
from flask_jwt_extended import jwt_required


book_ns=Namespace('book',description="A namespace for books")


# model (serializer)
books_model = book_ns.model(
    "Books",
    {
        "id":fields.Integer(),
        "title":fields.String(),
        "author":fields.String(),
        "description":fields.String()
    }
)


@book_ns.route('/hello')
class HelloResource(Resource):
    def get(self):
        return {"message": "Hello World"}




@book_ns.route('/books', methods=['POST','GET'])
class BooksResource(Resource):

    @book_ns.marshal_list_with(books_model)
    def get(self):
        """Get all books from db"""
        books=Books.query.all()
        return books
    
    @book_ns.marshal_with(books_model)
    @book_ns.expect(books_model)
    # @jwt_required()
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
    
@book_ns.route('/books/<int:id>')
class BookResource(Resource):
    
    @book_ns.marshal_list_with(books_model)
    def get(self, id):
        """Get a book by id"""
        books=Books.query.get_or_404(id)
        
        return books
        
        
    @book_ns.marshal_with(books_model)
    # @jwt_required()
    def put(self, id):
        """Update books by id"""
        book_to_update=Books.query.get_or_404(id)
        
        data = request.get_json()
        book_to_update.update(data.get("title"),data.get("author"),data.get("description"))
        
        return book_to_update
    

    @book_ns.marshal_with(books_model)
    # @jwt_required()
    def delete(self, id):
        """Delete books by id"""
        book_to_delete=Books.query.get_or_404(id)
        
        book_to_delete.delete()
        
        return book_to_delete
    