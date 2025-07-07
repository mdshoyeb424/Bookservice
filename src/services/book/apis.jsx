
export const getAllBooks = () => {
        const users = localStorage.getItem('books');
        return users ? JSON.parse(users) : [];
}
export const getBookById = (id) => {
        const users = localStorage.getItem('books');
        return users.find((b) => b.id == id) || null;
}

export const updateBook = (data, id) => {
  const storedBooks = localStorage.getItem('books');
  const books = storedBooks ? JSON.parse(storedBooks) : [];

  const updatedBooks = books.map((book) =>
    book.id === id ? { ...book, ...data } : book
  );

  localStorage.setItem("books", JSON.stringify(updatedBooks));
  return data;
};


export const deleteBook = (id) => {
  const storedBooks = localStorage.getItem('books');
  const books = storedBooks ? JSON.parse(storedBooks) : [];

  const updatedBooks = books.filter((b) => b.id !== id);
  localStorage.setItem("books", JSON.stringify(updatedBooks));

  return true;
};



export const addBook = (data) => {
  const storedBooks = localStorage.getItem('books');
  const books = storedBooks ? JSON.parse(storedBooks) : [];

  const updatedBooks = [...books, data];
  localStorage.setItem("books", JSON.stringify(updatedBooks));

  return data;
};
