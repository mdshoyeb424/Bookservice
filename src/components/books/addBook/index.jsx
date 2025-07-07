import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addBookService, updateBookService } from "../../../services/book";
import { BiLeftArrowAlt } from "react-icons/bi";

const AddBook = () => {
  const { state } = useLocation();
  const [book, setBook] = useState(state?.book);
  const navigate=useNavigate()

  useEffect(() => {
    if (state && state.book) {
      setBook(state.book);
    }
  }, [state?.book]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state?.page === "Add") {
      const res = await addBookService(book);
      if (res) {
        navigate(-1);
      }
    } else {
      const res = await updateBookService(book, state?.book?.id);
      if (res) {
        navigate(-1);
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto">
          <h2 className="text-center fw-bold my-4">
            {state?.page || "Add"} Book
          </h2>
          <div>
             <button onClick={() => navigate(-1)} className="btn btn-secondary"><BiLeftArrowAlt/> Back</button>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="row row-cols-2">
              <div className="my-3">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="w-100 p-2 rounded-3 "
                  id="title"
                  value={book?.title}
                  onChange={handleChange}
                  name="title"
                  placeholder=" Enter book title"
                />
              </div>
              <div className="my-3">
                <label htmlFor="auther">Auther</label>
                <input
                  type="text"
                  className="w-100 p-2 rounded-3 "
                  id="author"
                  value={book?.author}
                  onChange={handleChange}
                  name="author"
                  placeholder="Enter book author"
                />
              </div>
              <div className="my-3">
                <label htmlFor="genre">Genre</label>
                <input
                  type="text"
                  className="w-100 p-2 rounded-3 "
                  id="genre"
                  value={book?.genre}
                  onChange={handleChange}
                  name="genre"
                  placeholder="Enter book genre"
                />
              </div>
              <div className="my-3">
                <label htmlFor="year">Year</label>
                <input
                  type="text"
                  className="w-100 p-2 rounded-3 "
                  id="year"
                  value={book?.year}
                  onChange={handleChange}
                  name="year"
                  placeholder="Enter book year"
                />
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
