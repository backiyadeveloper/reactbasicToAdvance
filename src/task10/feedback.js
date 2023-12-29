import React from "react";
import './feedback.css';
import { Link } from "react-router-dom";
export function Feedback(){
    return(
        <div className="maindivv d-flex align-items-center justify-content-center">
            <div className="bg-white w-50 rounded p-5">
                <h1>How Satisfied are you with our customer support Perfomance?</h1>
                <div className="d-flex">
                   <figure> 
                        <img src="https://freepngimg.com/thumb/sad_emoji/36807-4-sad-emoji-clipart.png" className="imag "/>
                        <figcaption class="figure-caption col-1 mx-auto"><Link to={'/thank'}><a href="./thank.js">SAD</a></Link></figcaption>
                    </figure>
                    <figure>
                        <img src="https://cdn.pixabay.com/photo/2013/04/01/09/07/smile-98458_640.png" className="imag" />
                        <figcaption class="figure-caption col-1 mx-auto"><Link to={'/thank'}><a href="./thank.js">Happy</a></Link></figcaption>
                    </figure>
                    <figure>
                        <img src="https://i.pinimg.com/736x/32/3e/3b/323e3b47f07fa1fb0a4b2ecb03b2c965.jpg" className="imag"/>
                        <figcaption class="figure-caption col-1 mx-auto"><Link to={'/thank'}><a href="./Tthank.js">None</a></Link></figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
}