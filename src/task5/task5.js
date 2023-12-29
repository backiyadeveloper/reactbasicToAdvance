import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck,faBell} from '@fortawesome/free-regular-svg-icons';
import {faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
export function Task5(){
    return (
        <>
        <div className=" row gap-2 justify-content-center">
        <h1 className="text-center">NOTIFICATIONS</h1>
        <button className="btn btn-info   col-lg-6"><FontAwesomeIcon icon={faCircleCheck} />infermation messaage</button>
        <button className="btn btn-success   col-lg-6"> <FontAwesomeIcon icon={faCircleCheck} />Success messaage</button>
        <button className="btn btn-warning   col-lg-6"><FontAwesomeIcon icon={ faBell} />warning message</button>
        <button className="btn btn-danger   col-lg-6"><FontAwesomeIcon icon={faCircleExclamation} />Error message</button>
        </div>
        </>
    );
}