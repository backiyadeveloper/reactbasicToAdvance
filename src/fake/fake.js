import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
export function Fake(){
    const[product,setProduct]=useState([]);
    useEffect(()=>{fetch("https://fakestoreapi.com/products")
                  .then(data=>data.json())
                  .then(putProduct=>setProduct(putProduct))
})
    return(
        <>
        <h1>products</h1>
        <div className="row container-fluid"> 
        <table className="table">  
        <thead>
            <tr>
                
                <th>image</th>
                <th>title</th>
                <th>price</th>
                <th>button</th>
                <th>feedback</th>
            </tr></thead>
          {
            product.map((value,index)=>(
                <>
                {/* <div className="card col-lg-4">
                    <img src={value.image} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{value.title}</h5>
                        <p className="card-title">{value.price}</p>
                        <Link to={`/fake2/${value.id}`} className="btn btn-primary">view</Link>
                    </div>

                </div>  */}
                <tbody>
                <tr>
                    
                    <td className="col-2"><img src={value.image} alt="image1" className="w-25 h-25 image-fluid"/></td>
                    <td className="col-3"><h4>{value.title}</h4></td>
                    <td className="col-2"><h4>{value.price}</h4></td>
                    <td className="col-1"><Link to={`/fake2/${value.id}`} className="btn btn-primary">view</Link></td>
                    <td className="col-3"><StarRatings
                     rating={value.rating.rate}
                    starDimension="40px"
                   starSpacing="15px"
                    /></td>
                </tr></tbody>
                </>
            ))
        }
        </table>  
        </div>
       </> 
    );
}