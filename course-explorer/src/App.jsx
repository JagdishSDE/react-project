import React, { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import { apiurl,filterData } from './data';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import { toast } from 'react-toastify';
import Cards from './components/Cards';
import Spinner from './components/Spinner' 

function App() {

  const [category, setCategory] = useState(filterData[0].title);
  const [courses,setCourses] = useState([]);
  const [loading,setloading] = useState(true);

  useEffect( () => {
    const fetchData = async() => {
      setloading(true);
      try{
        const res = await fetch(apiurl);
        const output = await res.json();
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setloading(false);
    }
    fetchData();
  },[])

  return (

    <div className="min-h-screen flex flex-col bg-bgDark2">
    <div>
      <Navbar></Navbar>
    </div>

     <div className="bg-bgDark2">
      <div>
      <Filter
          filterData = {filterData}
          category = {category}
          setCategory = {setCategory}
      ></Filter>
    </div>  
    <div className="w-11/12 max-w-[1200px] 
    mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
        loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
      }
    </div>
     </div>

     
    </div>
  );
};

export default App
