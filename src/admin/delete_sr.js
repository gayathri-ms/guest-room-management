import React , {useState , useEffect}from 'react';
import { Link ,Redirect} from 'react-router-dom';
import Base from '../core/Base';
import { delete_sr} from '../admin/helper/adminapi';


const Delete_sr=()=>{
const [values,setValues]= useState({
    StaffID :"",
    RoomID: "",
    error:"",
    success:"",
    // formData:"",
})
const {
    StaffID,
    RoomID,
    error,
    success,
    // formData
} = values;


const handleChange=name =>(event)=>{
      const value = event.target.value ;
      // formData.set(name,value);
      setValues({...values ,[name]: value})
}

const onSubmit=(event) => {
    console.log("onsubmit");
    event.preventDefault();
    setValues({...values, error: ""})


    if(delete_sr({StaffID,RoomID})) {
          setValues({
          ...values,
          StaffID:"",
          RoomID:"",
          loading: false,
          success: true,

        })
    }
};
const successMessage=()=>{
    if(success){
        return <h4 className="text-success">Added new relation successfully</h4>
    }

}
const errorMessage=()=>{
    if(error){
        return <h4 className="text-danger">Failed to add new relation </h4>
    }
};

    const staffForm =()=>{
      return  <form>
                <div className="form-group">
                <p className="lead">Staff ID</p>
                <input type="text" className="form-control my-3"
                onChange={handleChange('StaffID')}
                value={StaffID}
                autoFocus
                required
                placeholder=
                "Staff ID"/>

                <p className="lead">Room ID</p>
                <input type="text" className="form-control my-3"
                onChange={handleChange('RoomID')}
                value={RoomID}
                autoFocus
                required
                placeholder=
                "Room ID"/>

            <button onClick={onSubmit} className="btn1 btn-lg">Delete Staff Details</button>
            </div>
        </form>
    }

     return (
    <Base title =" Delete Staff Details Here"
        description=""
        className="container2"
        >
          <div className="stu">
            <div className="row text-dark rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {staffForm()}
                </div>
            </div>
          </div>
    </Base>

    )

}
export default Delete_sr ;
