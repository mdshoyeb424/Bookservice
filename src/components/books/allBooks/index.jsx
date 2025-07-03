import { useEffect, useState } from "react"
import { getAllBooksSerivce } from "../../../services/book";
import { Table } from "antd";
import { BookColumns } from "../../../datasoure/books";

const AllBooksComponent = () => {
    const [books,setBooks]=useState([]);
    const getBooks=async()=>{
        const fetcBook=await getAllBooksSerivce();
        setBooks(fetcBook);
    }
    useEffect(()=>{
        getBooks();
    },[])
  return (
    <div><Table dataSource={books} columns={BookColumns} pagination={{pageSize:5}} />;</div>
  )
}

export default AllBooksComponent