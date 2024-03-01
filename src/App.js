/*
import { useState,useEffect } from "react";
import axios from "axios";
const App=()=>{
     const [mydata,setMydata]=useState([]);
     const loadData=()=>{
      let url ="http://34.198.81.140/attendance.json";
      axios.get(url).then((res)=>{
        setMydata(res.data);
      });
     }
     useEffect(()=>{
      loadData();
     },[]);
     const myans=mydata.map((key)=>{
      return(
        <>
           <tr>
            <td>{key.rec_id}</td>
            <td>{key.emp_id}</td>
            <td>{key.date}</td>
            <td>{key.time_in}</td>
            <td>{key.time_out}</td>
            <td>{key.weekday}</td>
            <td>{key.name}</td>
            <td>{key.gender}</td>
            <td>{key.designation}</td>
            <td>{key.department}</td>
            <td>{key.basic_salary}</td>
            <td>{key.per_day_salary}</td>
           </tr>
        </>
      )
     }); 
  return(
    <>
       <table className="main-data" border="5" width="95%" align="center" height="auto">
              <tr className="data">
                <th>EMP RES</th>
                <th>EMP ID</th>
                <th>DATE</th>
                <th>TIME IN</th>
                <th>TIME OUT</th>
                <th> WEEKDAY</th>
                <th>EMP NAME</th>
                <th>GENDER</th>
                <th>DESIGNATION</th>
                <th>DEPARTMENT</th>
                <th>SALARY</th>
                <th>P D SALARY</th>
              </tr>
              {myans}
       </table>
    </>
  );
}
export default App;
*/

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import Insert from "./insert";
import Display from "./display";
import Update from "./update";
import Contact from "./contact";
import EditRec from "./EditRec";
import Serach from "./Serach";
const App=()=>{
  return(
    <>
      <Router>
        <Routes>
           <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="insert" element={<Insert/>}/>
            <Route path="display" element={<Display/>}/>
            <Route path="update" element={<Update/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="editrec/:myid" element={<EditRec/>}/>
            <Route path="serach" element={<Serach/>}/>
           </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
