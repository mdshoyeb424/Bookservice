import { showToast } from "../../utils/toaster";
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from "./apis";

export const getAllBooksSerivce = () => {
    try {
        const books = getAllBooks();
        return books;
    } catch (error) {
        showToast("error", "something went wrong");
    }
}

export const addBookService = (data) => {
    try {
        const books = getAllBooks();
        if(books&&books.find((u)=>u.title===data.title)){
            showToast("error", "Email already exist");
            return;
        }
        addBook(data);
        showToast("success", "Book Added successfully !");
        return true
    } catch (error) {
        console.log(error)
        showToast("error", "something went wrong");
        return false;
    }
}

export const updateBookService = (data,id) => {
    try {
        const books = getAllBooks();
        if(books&&!books.find((u)=>u.id===data.id)){
            showToast("error", "Invalid book id !");
            return;
        }
        updateBook(data,id);
        showToast("success", "Book updated successfully !");
        return true;
    } catch (error) {
        console.log(error)
        showToast("error", "something went wrong");
        return;
    }
}

export const deleteBookByIdService = (id) => {
    try {
        const books = getAllBooks();
        if(books&&!books.find((u)=>u.id===id)){
            showToast("error", "Invalid book id !");
            return;
        }
        deleteBook(id);
        showToast("success", "Book deleted successfully !");
        return true;
    } catch (error) {
        console.log(error)
        showToast("error", "something went wrong");
        return;
    }
}

export const getBookByIdService = (id) => {
    try {
        const books = getAllBooks();
        if(books&&!books.find((u)=>u.id===data.id)){
            showToast("error", "Invalid book id !");
            return;
        }
      const book=  getBookById(id);
        showToast("success", book);
    } catch (error) {
        showToast("error", "something went wrong");
    }
}