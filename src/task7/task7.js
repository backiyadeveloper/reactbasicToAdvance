import React from "react";
import "../task7/task7.css";
export function Task7(){
    return(
        <>
        <div className=" firstdiv parentdiv">
             <h1 className="text-center">Learn 4.0 Technologies</h1>
             <p className="text-center ">Industry 4.0 can be defined as the integration of intelligent digital technologies into manufacturing and industrial processes. It encompasses a set of technologies that include industrial IoT networks, AI, Big Data, robotics, and automation.</p>
             <div className=" row  gap-1 gap-sm-3">
                <div className=" col-lg-4 rounded me-3  box1  mx-auto ">
                   <h3 className="ms-3">Data Scientiest</h3>
                   <p className="ms-3">A data scientist is someone who makes value out of data. Such a person proactively fetches information from various sources and analyzes it for better understanding about how the business performs, and to build AI tools that automate certain processes within the company.</p>
                   <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/01/archetypes-banner.png" alt="datascientiest" className="allimages float-end"/>
                </div>
                <div className=" col-lg-4  box2 rounded mx-auto ">
                    <h3 className="ms-3">Iot developer</h3>
                    <p className="ms-3">The role of an IoT Developer/Engineer is a broad umbrella that brings to play multiple disciplines and skillsets. IoT Developers are professionals who can develop, manage, and monitor IoT devices and systems by combining three core components  data, technology, and research.</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFGH_EUuSUmSSvqO2fAPVyTsThyv-qC1SrVA&usqp=CAU" alt="iotdeveloper" className="allimages float-end"/>
                </div>
                <div className="col-lg-4 me-3  box3 rounded mx-auto ">
                  <h3 className="ms-3">VR Developer</h3>
                  <p className="ms-3">Virtual reality (VR) developers create digital settings that users can see through a device like an Oculus headset. They design, test, and develop VR software.</p>
                  <img src="https://www.nevinainfotech.com/new-ni-images/hire-pages-images/hire-virtual-reality-developers-img-3.svg" alt="ve  developer" className="allimages float-end"></img>
                </div>
                <div className=" col-lg-4 box4 rounded mx-auto">
                    <h3 className="ms-3 ">ML Engineer</h3>
                    <p className="ms-3">A machine learning engineer (ML engineer) is a programmer who designs and builds software that can automate artificial intelligence and machine learning (AI/ML) models.</p>
                    <img src="https://cdn.sanity.io/images/oaglaatp/production/2d215fdc3d854217b402e9816af925ebde110ebb-1200x800.png?w=1200&h=800&auto=format " alt="ml" className="allimages float-end"></img>
                </div>
             </div>
        </div>
        </>
    );
}