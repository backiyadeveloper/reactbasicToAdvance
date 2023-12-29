import React from "react";
import '../task6/task6.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope,faLock} from "@fortawesome/free-solid-svg-icons";

export function Task6(){
    return (
        <>
        <div className="div1 d-md-flex justify-content-md-center align-items-md-center mx-auto">
            <div className="div2 container d-md-flex justify-content-md-center align-items-md-center">
              <img src="https://images.vexels.com/media/users/3/131217/isolated/preview/e613fbde0ac88fd305dee8929b6679f1-laptop-circle-icon.png" alt="image"/>
              <div className="row gap-sm-3 col-sm-4">
                <h3>Memeber login</h3>
                <div className="emailbox  rounded-pill">
                <FontAwesomeIcon icon={faEnvelope} />
                <input type="text" placeholder="Email" className="emailbox1"/>
                </div>
                <div className="emailbox rounded-pill">
                <FontAwesomeIcon icon={faLock} />
                <input type="password" placeholder="password" className="emailbox1"/>
                </div>
                <button className="btn btn-success text-light">log in</button>
                <p>forgot <span className="text-success">userName/password?</span></p>
                <p className="text-success">create your account</p>
              </div>
            </div>
        </div>
        </>
    );
}