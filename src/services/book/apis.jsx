
export const getAllBooks = () => {
        const users = localStorage.getItem('books');
        return users ? JSON.parse(users) : [];
}
export const getBookById = (id) => {
        const users = localStorage.getItem('books');
        return users.find((b) => b.id == id) || null;
}

export const updateBook = (data, id) => {
        const users = localStorage.getItem('books') || [];
        const updateUsers = users.map((b) =>
            b.id === id ? { ...b, ...data } : b
        )
        localStorage.setItem("books", JSON.stringify(updateUsers));
        return data;
}

export const deleteBook = (id) => {
        const users = localStorage.getItem('books') || [];
        const updateUsers = users.filter((b) => b.id != id);
        localStorage.setItem("books", JSON.stringify(updateUsers));
        return true;
}


export const addBook = (data) => {
        const users = [...defineUsers, data];
        localStorage.setItem("books", JSON.stringify(users));
        return data;
}