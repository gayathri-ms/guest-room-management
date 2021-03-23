import React,{useState} from 'react';
import { Link,Redirect } from 'react-router-dom';
import { addsr } from '../admin/helper/adminapi';
import Base from '../core/Base';


const Add_sr=()=>{

const [values,setValues]= useState({
        RoomID:"",
        StaffID: "",
        error:"",
        didRedirect: false,
        success:"",
        formData:"",
    })
    const {
        RoomID,
        StaffID,
        error,
        didRedirect,
        success,
        formData
    } = values;

    const handleChange=name =>(event)=>{
          const value = event.target.value ;
       // formData.set(name,value);
      setValues({...values ,[name]: value})
    }
    const onSubmit=(event) => {
        //
        event.preventDefault();
        setValues({...values, error: "",loading: true})
        addsr({StaffID, RoomID}).then(data =>{
          if(data.error){
            setValues({...values, error : data.error})
          }else{
            setValues({
              ...values,
              StaffID:"",
              RoomID:"",
              didRedirect: false,
              loading: false,
              success: true,
            })
          }
        })


    }
    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Added staff to room successfully </h4>
        }

    }
    const performRediret = () =>{
        if (didRedirect) {
            return <Redirect to="/admin/m_dashboard"/>;
        }
    }
    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to assign staff to room </h4>
        }
    };
    const staffForm =()=>{
      return  <form>
            <div className="form-group">
                <p className="lead">Staff Id</p>
                <input type="text" className="form-control my-3"
                onChange={handleChange("StaffID")}
                value={StaffID}
                autoFocus
                required
                placeholder=
                "Staff Id"/><br/>
                <p className="lead">Room ID</p>
                <input type="text" className="form-control my-3"
                onChange={handleChange("RoomID")}
                value={RoomID}
                autoFocus
                required
                placeholder=
                "Room ID"/>

            <button type="submit" onClick={onSubmit} className="btn1 btn-lg">Assign Staff to Room</button>
            </div>
        </form>
    }




    return (
    <Base title ="Assign Staff to Room "
        description="Assign a new staff to room"
        className="container2"
        >
          <div className="stu">
            <div className="row text-dark rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {staffForm()}
                    {performRediret()}
                </div>
            </div>
           </div>
    </Base>

    )
};
export default Add_sr ;
