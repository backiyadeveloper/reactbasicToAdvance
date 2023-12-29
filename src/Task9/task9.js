import React, { useState } from "react";
import "../Task9/task9.css";
export function Task9(){
    const[count,setCount]=useState(4);
    const[bacount,setBacount]=useState(5);
    // function add(){
    //     setCount(count+1);
    // }
    return(
        <>
        <div className="bg-warning parentdiv row align-items-center ">
            <div className="bg-light  rounded col-7 mx-auto">
                <h1 className="text-center">Bop ate <span className="text-warning">{count}</span> mangoes <span className="text-warning">{bacount}</span> bananas</h1>
                <div className="d-flex ">
                <div>
                    <img src="https://www.financialexpress.com/wp-content/uploads/2023/07/Dashehari11.jpg" alt="mango" className="image1"/><br/>
                    <button className="but bg-info text-light rounded" onClick={()=>{setCount(count+1)}}>Eat mangoe</button>
                    </div>
                    <div>
                    <img src="https://media.istockphoto.com/id/1400057530/photo/bananas-isolated.jpg?b=1&s=612x612&w=0&k=20&c=l_PYva9aG-82rWFI_HQ8jzArXRYiciq2cVvX12Sj-QU=" alt="bana" className="image1"/><br/>
                    <button className="but bg-info text-light rounded" onClick={()=>{setBacount(bacount+1)}} center>Eat banana</button></div></div>
                    </div>
                </div>
        </>
    );
}