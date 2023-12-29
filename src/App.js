//import logo from './logo.svg';
import './App.css';
//import {Rate} from "antd";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Task8} from "./task8/task8";
import {Task} from "./task1";  
import {Task2} from "./task2/task2"; 
import {Task3} from "./task3/task3";
import {Task4} from "./task4/task4"; 
import {Task5} from "./task5/task5" ;
import {Task6} from "./task6/task6" ;
import {Task7} from "./task7/task7" ;
import {Home} from "./home";
import {Task9} from "./Task9/task9";
import {Fake} from "./fake/fake";
import {Feedback} from "./task10/feedback";
import {Thanks } from "./task10/thank";
import {Details} from "./fake2page/fake2";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
//import { Task8 } from './task8/task8';
function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    {/* <Route path='/'element={<Home/>}/> */}
    <Route path='/task1' element={[<Home/>,<Task/>]}/>
    <Route path='/task2' element={[<Home/>,<Task2/>]}/>
    <Route path='/task3' element={[<Home/>,<Task3/>]}/>
    <Route path='/task4' element={[<Home/>,<Task4/>]}/>
    <Route path='/task5' element={[<Home/>,<Task5/>]}/>
    <Route path='/task6' element={[<Home/>,<Task6/>]}/>
    <Route path='/task7' element={[<Home/>,<Task7/>]}/>
    <Route path='/task8' element={[<Home/>,<Task8/>]}/>
    <Route path='/task9' element={[<Home/>,<Task9/>]}/> 
    <Route path='/fake' element={[<Home/>,<Fake/>]}/> 
    <Route path='/fake2/:id' element={[<Home/>,<Details/>]}/>
    <Route path='/feedback' element={[<Home/>,<Feedback/>]}/>
    <Route path='/thank' element={[<Home/>,<Thanks/>]}/>
    {/* <Route path='/' element={<Task8/>}/> */}
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
