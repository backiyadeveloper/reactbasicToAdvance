import React, { useState } from "react";
export function Task8(){
    const[counter,setCounter]=useState(0);
    function sub(){
        setCounter(counter-1);
        if(counter<=1){
            document.getElementById("init").disabled=true;
        }
        else{
            document.getElementById("addbut").disabled=false;
        }
    }
    function reset(){
        setCounter(counter*0);
        document.getElementById("init").disabled=false;
        document.getElementById("addbut").disabled=false;
    }
    function add(){
        // ()=>{
        //     setCounter(counter+1)}
        setCounter(counter+1);
        if(counter>=9){
            document.getElementById("addbut").disabled=true;
        }
        else{
            document.getElementById("init").disabled=false;
        }
    }
    return(
        <>
        <div className="text-center">
            <h1>{counter}</h1>
        <button id="addbut" onClick={add} >ADD</button>
        <button id="init" onClick={sub}>sub</button>
        <button onClick={reset}>reset</button>

        </div>
                </>
    );
}