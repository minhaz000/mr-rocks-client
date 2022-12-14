import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
function Details(props) {
    const data = useLoaderData()
    const ref = React.createRef();
    return (
        <div className='col-12 col-md-8 col-9'>
            <Pdf targetRef={ref} filename={"course-"+data.name}>
        {({ toPdf }) => <button className='btn btn-info float-end mt-4 text-white' onClick={toPdf}>Dwoload PDF </button>}
      </Pdf>

           
         <div ref={ref} className=' my-5'>
         <h3 className='text-primary text-center'>{data.title}  </h3>
         <div className="container">  <img className=' img-fluid my-5' src={ data.thumbnail} alt="" /></div>
        
                <p><b>Des : </b> {data.description}  </p>
                <p><b>Price : </b> {data.price}  </p>
                <p><b>Status : </b> {data.enroll_status}  </p>
            <Link to={`/checkout/${data.id}`} className=' btn btn-success'> Get premium access </Link>
         </div>
        </div>
    );
}

export default Details;