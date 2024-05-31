import { Link } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";
import { useEffect, useState } from "react";

import axios from 'axios';


export default function Homepage() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/articles')
      .then(articles => setArticles(articles.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="home">
        <NavBar />
      </div>
      <section className="w-3/4 main">
        <h4>Articles</h4>
        {/* <ul>
          {articles.map((article) => (
            <li key={article._id}>
              <h2>{article.title}</h2>
              <p>{article.content}</p>
              <p><strong>Author:</strong> {article.author}</p>
              <p><strong>Published Date:</strong> {new Date(article.publishedDate).toLocaleDateString()}</p>
            </li>
          ))}
        </ul> */}
        <div className="grid grid-cols-3 w-full gap-10 mt-4">
          <div className="col-span-2 p-4 ml-4">
            <h4 className="font-medium text-2xl text-center">Our Stories</h4>
            <div className="grid grid-cols-6 gap-3 mt-2 justify-center content-center">
              <div>
                <img src="./book.png" alt="book1" />
                <h4 className="font-bold">The rise of Obote</h4>
                <h5 className="text-gray-500">Usher Sozzi</h5>
              </div>
              <div>
                <img src="./book.png" alt="book1" />
                <h4 className="font-bold">The rise of Obote</h4>
                <h5 className="text-gray-500">Usher Sozzi</h5>
              </div>
              <div>
                <img src="./book.png" alt="book1" />
                <h4 className="font-bold">The rise of Obote</h4>
                <h5 className="text-gray-500">Usher Sozzi</h5>
              </div>
              <div>
                <img src="./book.png" alt="book1" />
                <h4 className="font-bold">The rise of Obote</h4>
                <h5 className="text-gray-500">Usher Sozzi</h5>
              </div>
              <div>
                <img src="./book.png" alt="book1" />
                <h4 className="font-bold">The rise of Obote</h4>
                <h5 className="text-gray-500">Usher Sozzi</h5>
              </div>
              <div>
                <img src="./book.png" alt="book1" />
                <h4 className="font-bold">The rise of Obote</h4>
                <h5 className="text-gray-500">Usher Sozzi</h5>
              </div>
            </div>
          </div>
          <div className="w-3/4 p-4">
            <div className="text-black border rounded-sm shadow-sm p-4">
              <h3>Navigate</h3>
              <hr className="mt-2 mb-2"></hr>
              <h4>Library Locale is a project that was started out of passion to
                build systems that provide a common African child a platform to
                read and share knowledge.</h4>
              <hr className="mt-2 mb-2"></hr>
              <ul className="list-inside">
                <li className="text-custom-blue">
                  <Link to="/books">Books</Link>
                </li>
                <hr className="mt-2 mb-2"></hr>
                <li className="text-custom-blue">
                  <Link to="/books">Articles</Link>
                </li>
                <hr className="mt-2 mb-2"></hr>
                <li className="text-custom-blue">
                  <Link to="/books">Journals</Link>
                </li>
                <hr className="mt-2 mb-2"></hr>
                <li className="text-custom-blue">
                  <Link to="/books">Poetry</Link>
                </li>
              </ul>

            </div>
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-center font-bold text-3xl mb-2">Our Servives</h4>
          <div className="grid grid-cols-4 gap-4 p-4 rounded bg-slate-500">
            <div>
              <div className="text-center">
                <i className='bx bx-book bg-gray-700 rounded-full p-4 text-white text-2xl mb-4'></i>
                <h5 className="font-bold text-2xl text-white text-center mb-2">Local books</h5>
                <p className="text-white mb-4">Books are gateways to knowledge, imagination, and discovery.
                  They offer readers a chance to explore diverse worlds, ideas, and
                  perspectives. From fiction to nonfiction, each book holds the potential
                  to educate, inspire, and entertain. Books have the power to connect us to
                  different times, cultures, and experiences, enriching our lives in countless ways.</p>
              </div>
            </div>
            <div>
              <div className="text-center">
                <i className='bx bx-spreadsheet bg-gray-700 rounded-full p-4 text-white text-2xl mb-4'></i>
                <h5 className="font-bold text-2xl text-white text-center mb-2">Articles</h5>
                <p className="text-white mb-4">Library Locale is a project that was started out of passion to
                  build systems that provide a common African child a platform to
                  read and share knowledge</p>
              </div>
            </div>
            <div>
              <div className="text-center">
                <i className='bx bx-edit-alt bg-gray-700 rounded-full p-4 text-white text-2xl mb-4'></i>
                <h5 className="font-bold text-2xl text-white text-center mb-2">Journals</h5>
                <p className="text-white mb-4">Journals are invaluable for documenting research, ideas, and personal reflections. They provide a structured platform for recording progress, thoughts, and discoveries. Through regular entries, journals help track
                 development, inspire creativity, and facilitate deeper understanding of subjects or oneself.</p>
              </div>
            </div>
            <div>
              <div className="text-center">
                <i className='bx bx-microphone bg-gray-700 rounded-full p-4 text-white text-2xl mb-4'></i>
                <h5 className="font-bold text-2xl text-white text-center mb-2">Poetry</h5>
                <p className="text-white mb-4">Poetry distills emotions and truths into carefully
                  chosen words. Through forms like sonnets and free verse, it
                  captures human experience, transcending language and culture.
                  Blending sound and meaning, poetry explores the world and inner
                  thoughts, connecting hearts and minds across generations.</p>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
}
