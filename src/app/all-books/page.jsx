"use client";

export default function AllBooks() {
  const books = [
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      publishedYear: "1949",
      ISBN: "978-0451524935",
      language: "English",
      publisher: "Secker & Warburg",
      totalPages: 328,
      coverImage:
        "https://imgs.search.brave.com/fkm5BQKHdiNIO0By21M_1d6UYWfwG6EuwA5S5Iq8RJs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFLTDFYLU05Z0wu/anBn",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: "1960",
      ISBN: "978-0061120084",
      language: "English",
      publisher: "J.B. Lippincott & Co.",
      totalPages: 281,
      coverImage:
        "https://media.glamour.com/photos/56e1f3c4bebf143c52613c00/master/w_1600,c_limit/entertainment-2016-02-06-main.jpg",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto shadow-lg rounded-lg p-6 sm:p-8 ">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        All Books
      </h2>
      <ul className="space-y-6">
        {books.map((book) => (
          <li
            key={book.id}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row justify-around">
              {/* Cover Image */}
              <div className="w-full sm:w-1/3 flex justify-center items-center p-4">
                <img
                  src={book.coverImage}
                  alt={`${book.title} cover`}
                  className="h-48 object-cover"
                />
              </div>

              {/* Book Details */}
              <div className="w-full sm:w-2/3 p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {book.title}
                </h3>
                <p className="text-gray-600">Author: {book.author}</p>
                <div className="mt-4 text-sm text-gray-700 space-y-1">
                  <p>Published Year: {book.publishedYear}</p>
                  <p>ISBN: {book.ISBN}</p>
                  <p>Language: {book.language}</p>
                  <p>Publisher: {book.publisher}</p>
                  <p>Total Pages: {book.totalPages}</p>
                </div>

                {/* Borrow Button */}
                <button
                  onClick={() => alert(`Borrowed book: ${book.title}`)}
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-200"
                >
                  Borrow
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
