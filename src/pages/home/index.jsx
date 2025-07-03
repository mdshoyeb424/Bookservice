import React, { useEffect } from 'react'
import Layout from '../Layout'
import { books } from '../../data/booksData'
import AllBooksComponent from '../../components/books/allBooks'
import HomeBook from '../../components/books/homeBook'

const Home = () => {
  useEffect(() => {
  localStorage.setItem("books",JSON.stringify(books));
  },[])
  return (
   <Layout>
    <HomeBook/>
    {/* <AllBooksComponent/> */}
    </Layout>
  )
}

export default Home