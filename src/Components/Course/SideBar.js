import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SideBar(props) {
const [data , setData] = useState([])    
const url = "https://mr-rocks-server.vercel.app"
    useEffect(()=>{ 
        axios.get(url).then(response=>{ setData(response.data)})

    } ,[])
    return (
        <div className='col-12 col-md-4 col-lg-3 '>
            
            <ul className=' d-block px-2 Course-menu'> 
             {data.data? data.data.map(course => {
                return (
                    <li key={course.id} className=' d-block  '> 
                    <Link className=' text-decoration-none text-white  fw-bold text-center d-block' to={`/course/${course.id}`}> {course.name}</Link> 
                 </li> 
                )
             }) : ""
            }

            
                 
                 
               
            </ul>
        </div>
    );
}

export default SideBar;