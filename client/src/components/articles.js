import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./navbar";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await axios.get('http://localhost:3001/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    }

    fetchArticles();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newArticle = { title, content, author, publishedDate };
      const response = await axios.post('http://localhost:3001/articles', newArticle);
      setArticles([...articles, response.data]);
      // Clear the form fields
      setTitle('');
      setContent('');
      setAuthor('');
      setPublishedDate('');
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Add Article</h1>
        <form onSubmit={handleSubmit} className="space-y-4" method="POST">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              name="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content:</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              name="content"
              className="w-full h-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author:</label>
            <input
              id="author"
              type="text"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="publishedDate" className="block text-sm font-medium text-gray-700">Published Date:</label>
            <input
              id="publishedDate"
              type="date"
              name="publishedDate"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
        </form>
      </div>
      <h1 className="text-2xl font-bold mt-8">Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article._id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p><strong>Author:</strong> {article.author}</p>
            <p><strong>Published Date:</strong> {new Date(article.publishedDate).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
