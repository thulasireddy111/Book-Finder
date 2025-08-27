function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={coverUrl} alt={book.title} className="w-full h-60 object-cover mb-2" />
      <h2 className="text-lg font-semibold">{book.title}</h2>
      <p className="text-sm text-gray-600">Author: {book.author_name?.join(', ')}</p>
      <p className="text-sm text-gray-600">Published: {book.first_publish_year}</p>
    </div>
  );
}

export default BookCard;
