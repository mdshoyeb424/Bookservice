import { useEffect, useState } from "react"
import { deleteBookByIdService, getAllBooksSerivce } from "../../../services/book";
import { Table } from "antd";
import {  getBookColumns } from "../../../datasoure/books";
import { useNavigate } from "react-router-dom";

const AllBooksComponent = () => {
    const [books,setBooks]=useState([]);
    const navigate=useNavigate();
    const getBooks=async()=>{
        const fetcBook=await getAllBooksSerivce();
        setBooks(fetcBook);
    }
    useEffect(()=>{
        getBooks();
    },[])

    const handleNavigate=()=>{
      navigate("/service/book/add",{state:{book:null,page:"Add"}});
    }

  const handleEdit = (book) => {
    navigate("/service/book/add", { state: { book, page: "Update" } });
  };

  const handleDelete = (id) => {
  const res=  deleteBookByIdService(id);
  if(res){
    getBooks();
  }
  };

  const columns = getBookColumns(handleEdit, handleDelete);


  return (
    <div>
      <div className=" text-end my-4 w-100">
        <button onClick={()=>handleNavigate()} className="btn btn-primary">Add Book</button>
      </div>
      <Table dataSource={books} columns={columns} pagination={{pageSize:5}} />;
      </div>
  )
}

export default AllBooksComponent