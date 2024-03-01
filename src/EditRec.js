import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const  EditRec=()=>{
  const {myid}=useParams();
  const [mydata,setMydata]=useState({});
  const myNav=useNavigate();
  const loadData=()=>{
    let url=`http://localhost:4000/student/${myid}`
    axios.get(url).then((res)=>{
      // console.log(res.data);
      setMydata(res.data);
    })
  }
  useEffect(()=>{
    loadData();
  },[]);
  const handelInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setMydata(values=>({...values,[name]:value}))
  }
  const handelSubmit=()=>{
    let url=`http://localhost:4000/student/${myid}`;
    axios.put(url,mydata).then((res)=>{
      alert("Data Succesfully Update!")
      myNav("/update");
    });
  }
  return(
    <>
    <center className="Insert">
      <div className="I-second">
          <h1 className="Insert-1">Edit record</h1> 
        <b>Edit P-Name:&nbsp;&nbsp;</b><input type="text" name="rollno" value={mydata.rollno} onChange={handelInput}/><br/><br/>
        <b>Edit P-Price:&nbsp;&nbsp;  </b><input type="text" name="name" value={mydata.name} onChange={handelInput}/><br/><br/>
       <b>Edit P-Qutity:&nbsp;</b><input type="text" name="city" value={mydata.city} onChange={handelInput}/><br/><br/>
        <b>Edit P-T-Price:&nbsp;</b><input type="text" name="tprice" value={mydata.tprice} onChange={handelInput}/><br/><br/>
        <b>Edit P-Rating:&nbsp;</b><input type="text" name="fees" value={mydata.fees} onChange={handelInput}/><br/><br/>
        <button className="btn"  onClick={handelSubmit}>Update Data</button>
        </div>
        </center>
    </>
  );
}
export default EditRec;
