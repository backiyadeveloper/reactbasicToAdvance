import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Details(){
    const[details,setDetails]=useState([]);
    var {id}=useParams();
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/"+id) 
        .then(res=>res.json())
        .then(data=>setDetails(data))
    })
return(
    <>
    <div className="container-fluid row">
        <div className="col-lg-6">
            <img src={details.image} className="w-50"/>
        </div>
        <div className="col-lg-6">
            <h4>{details.title}</h4>
        </div>
    </div>
    </>
);
}