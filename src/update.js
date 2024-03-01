import axios from "axios";
import { useState, useEffect } from "react";
import myedit from "./image/idit.png";
import mydilit from "./image/dilit.png";
import { Link } from "react-router-dom";

const Update=()=>{
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
  const myDelet=(myid)=>{
    let url=`http://localhost:4000/student/${myid}`
    axios.delete(url).then((res)=>{
        alert("record Deleted!!!");
        loadData();
    })
  }
  const  ans=mydata.map((key)=>{
    return(
      <>
          <center>
          <div className="data-1">
             <div>{key.rollno}</div>
             <div>{key.name}</div>
             <div>{key.city}</div>
             <div>{key.tprice}</div>
             <div>{key.fees}</div>
             <div className="data-2">
                <Link to={"/editrec/"+key.id}>
                <img src={myedit} width="20px" height="20px"/>
              </Link>
                <a href="#" onClick={()=>{myDelet(key.id)}}>
                <img src={mydilit} width="20px" height="20px"/>
                </a>
              </div>
          </div>
          </center>
         
      </>
    );
  })
  return(
    <>
     <div className="dish">
        <center>
        <div className="dish-2">
            <div>Product Name</div>
            <div>Product Pricre</div>
            <div>Product Quantity</div>
            <div>Product T-Price</div>
            <div>Product Rating</div>
            <div>Delete/Update</div>
          
        </div>
        </center>
        {ans}
        </div>
    </>
  );
}
export default Update;

/*
<table align="center" width="100%" bgcolor="pink">
<tr bgcolor="orange">
  <th>Product Name</th>
  <th>Product Price</th>
  <th>Product Quantity</th>
  <th>Product T-Price</th>
  <th>Product Rating</th>
  <th>Delete/Update</th>
</tr>
{ans}
</table>


<tr>
              <td>{key.rollno}</td>
              <td>{key.name}</td>
              <td>{key.city}</td>
              <td>{key.tprice}</td>
              <td>{key.fees}</td>
              <td>
                <Link to={"/editrec/"+key.id}>
                <img src={myedit} width="20px" height="20px"/>
              </Link>
                <a href="#" onClick={()=>{myDelet(key.id)}}>
                <img src={mydilit} width="20px" height="20px"/>
                </a>
              </td>
         </tr>
*/