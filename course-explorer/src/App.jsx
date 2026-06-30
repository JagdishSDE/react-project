import React, { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import { apiurl,filterData } from './data';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import { toast } from 'react-toastify';
import Cards from './components/Cards';

function App() {

  const [courses,setCourses] = useState([]);

  useEffect( () => {
    const fetchData = async() => {
      try{
        const res = await fetch(apiurl);
        const output = await res.json();
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
    }
    fetchData();
  },[])

  return (
    <>
      <Navbar></Navbar>
      <Filter
          filterData = {filterData}
      ></Filter>

      <Cards courses={courses}></Cards>
    </>
  );
};

export default App
