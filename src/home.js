import React from "react";
import {Link} from "react-router-dom"
import "./index.css"
export function Home(){
    return (
        <>

        <h3 className="text-center">Navbar</h3>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
     {/* <Link to=""><a className="navbar-brand">Navbar </a></Link>  */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          {/* <Link to={'/'}><a className="nav-link  active text-decoration-none" aria-current="page" >Home</a></Link> */}
        </li>
        <li className="nav-item">
          <Link to={'/task1'}><a className="nav-link  active" aria-current="page">Hello</a></Link>
        </li>
        <li className="nav-item">
          <Link to={'/task2'}><a className="nav-link  active" aria-current="page">Congrates</a></Link>
        </li>
        <li className="nav-item">
         <Link to={'/task3'}> <a className="nav-link ">SuperOver</a></Link>
        </li>
        <li className="nav-item">
          <Link to={'/task4'}><a className="nav-link " >Social Button</a></Link>
        </li>
        <li className="nav-item">
          <Link to={'/task5'}><a className="nav-link ">Notification</a></Link>
        </li>
        <li className="nav-item">
          <Link to={'/task6'}><a className="nav-link ">Log in</a></Link>
        </li>
        <li className="nav-item">
          <Link to={'/task7'}><a className="nav-link ">Technologies</a></Link>
        </li>
        <li className="nav-item">
          <Link to={'/task8'}><a className="nav-link ">Add&sub</a></Link>
        </li>
        <li className="nav-item">
          <Link to={'/task9'}><a className="nav-link ">Mangoes</a></Link>
        </li>
        <li className="nav-item">
          <Link to={'/fake'}><a className="nav-link ">Fake</a></Link>
        </li>
        <li className="nav-item">
          <Link to={'/feedback'}><a className="nav-link ">Feedback</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}