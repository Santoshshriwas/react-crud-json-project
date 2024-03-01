import axios from "axios";
import { useState, useEffect } from "react";
const Display=()=>
{
  const [mydata, setMydata]= useState([]);
  const loadData=()=>{
    let url="http://localhost:4000/student";
    axios.get(url).then((res)=>{
      setMydata(res.data);
    });
  }  

  useEffect(()=>{
    loadData();
  },[]);
  const  ans=mydata.map((key)=>{
    return(
      <>
      <center>
          <div className="data">
             <div>{key.rollno}</div>
             <div>{key.name}</div>
             <div>{key.city}</div>
             <div>{key.tprice}</div>
             <div>{key.fees}</div>
          </div>
          </center>       
      </>
    );
  })
  return(
    <>   
      {/* <h1>Dispaly Record  </h1> */}
        <div className="dish">
        <center>
        <div className="dish-1">
            <div>Product Name</div>
            <div>Product Pricre</div>
            <div>Product Quantity</div>
            <div>Product T-Price</div>
            <div>Product Rating</div>
          
        </div>
        </center>
        {ans}
        </div>
      {/* <button onClick={loadData}>Click</button> */}
    </>
  );
}
export default Display;

/*
<table align="center" width="100%" bgcolor="pink">
         <tr bgcolor="orange">
          <th>Product Name</th> 
          <th>Product Pricr</th>
          <th>Product Quantity</th>
          <th>Product T-Price</th>
          <th>Product Rating</th>
        </tr>
        {ans}
      </table>
      <tr>
              <td>{key.rollno}</td>
              <td>{key.name}</td>
              <td>{key.city}</td>
              <td>{key.tprice}</td>
              <td>{key.fees}</td>
         </tr>
      */