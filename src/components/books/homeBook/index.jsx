import { useEffect, useState } from "react";
import { getAllBooksSerivce } from "../../../services/book";
import BookCard from "../bookCard";
import "./homeBook.scss";
import { BiSearch } from "react-icons/bi";

const HomeBook = () => {
  const [allBooks, setAllBooks] = useState([]); 
  const [filteredBooks, setFilteredBooks] = useState([]); 
  const [visibleCount, setVisibleCount] = useState(12);
  const step = 12;

  const getBooks = async () => {
    const fetchedBooks = await getAllBooksSerivce();
    setAllBooks(fetchedBooks);
    setFilteredBooks(fetchedBooks);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + step);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    const filtered = allBooks.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBooks(filtered);
    setVisibleCount(step); 
  };

  return (
    <div className="container">
      <div className="d-flex mt-5 mb-4">
        <div className="book-search ms-auto d-flex align-items-center px-3 py-1 rounded-5 bg-light shadow-sm">
          <input
            type="text"
            onChange={handleSearch}
            className="border-0 bg-transparent"
            placeholder="Search Book"
            style={{ width: "200px", outline: "none" }}
          />
          <BiSearch size={24} className="text-muted" />
        </div>
      </div>

      {/* Book Cards */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
        {filteredBooks.slice(0, visibleCount).map((item, idx) => (
          <BookCard key={idx} book={item} />
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filteredBooks.length && (
        <div className="my-3 text-center show-more-btn">
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default HomeBook;
