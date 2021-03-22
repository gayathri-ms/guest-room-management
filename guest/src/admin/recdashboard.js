import React ,{useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
// export default check_id
import {check_id } from '../admin/helper/adminapi';
import {check_room } from '../admin/helper/adminapi';

import Base from '../core/Base'

const Reception=()=>{




    const [values,setValues]= useState({
        name :"",
        address: "",
        phone: "",
        relation: "",
        Id:"",
        ac:"",
        beds:"",
        arrival:"",
        depart:"",
        occupants:"",
        loading: false,
        error: "",
        addguest: "",
        getaRedirect: false,
        formData : ""
    })
     
    const {
        name,
        address,
        phone,
        relation,
        Id,
        ac,
        beds,
        arrival,
        depart,
        occupants,
        loading,
        error,
        addguest,
        getaRedirect,
        formData
    }= values;

    const onSubmit=(event) => {
        //
        event.preventDefault();
        setValues({...values, error: "",loading: true})
   
        check_id({relation,Id}).then(data =>{
          if(data==='false'){
            setValues({
              ...values,
              Id:"", 
              error : data.error
            })
          }else{
           
            setValues({
              ...values,
              name:"",
              address:"",
              phone:"",
              relation:"",
              Id:"",
              ac:"",
              beds:"",
              arrival:"",
              depart:"",
              occupants:"",
              loading: false,
              addguest: data.name
            })
          }
        })


        check_room({beds,ac,arrival,depart}).then(data =>{
          console.log(data)
          if(data.error){
            console.log("Invalid data")
            setValues({
              ...values, 
              ac:"",
              beds:"",
              arrival:"",
              depart:"",
              error : data.error
            })
          }else{
            console.log("Room No:",data)
            setValues({
              ...values,
              name:"",
              address:"",
              phone:"",
              relation:"",
              Id:"",
              ac:"",
              beds:"",
              arrival:"",
              depart:"",
              occupants:"",
              loading: false,
            })
          }
        })

    //     Addguest(formData).then(data =>{
    //       if(data.error){
    //         setValues({...values, error : data.error})
    //       }else{
           
    //         setValues({
    //           ...values,
    //           name:"",
    //           address:"",
    //           phone:"",
    //           relation:"",
    //           Id:"",
    //           ac:"",
    //           beds:"",
    //           arrival:"",
    //           depart:"",
    //           loading: false,
              
    //         })
    //       }
    //     })


    }


  const handleChange= name => event =>{
      const value = event.target.value ;
       // formData.set(name,value);
      setValues({...values ,[name]: value})
  };

  const successMessage =()=>(
    <div className="alert alert-success mt-3"
    style={{display : addguest ? "" : "none"}}
    >
      <h4>Guest created successfuly</h4>
    </div>
  )


    const createguestForm = () => (
        <form >
          <div className="form-group">
          <p className="lead">Name</p>
            <input type="text"
              onChange={handleChange("name")}
              name="name"
              className="form-control my-3"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
          <p className="lead">Address</p>
            <textarea
              onChange={handleChange("address")}
              name="address"
              className="form-control my-3"
              placeholder="Address"
              value={address}
            />
          </div>
          <div className="form-group">
          <p className="lead">Phone Number</p>
            <input
              onChange={handleChange("phone")}
              type="number"
              className="form-control my-3"
              placeholder="Phone Number"
              value={phone}
            />
          </div>
          <div className="form-group">
          <p className="lead">Relation</p>
            <select
              onChange={handleChange("relation")}
              className="form-control my-3"
            >
              <option>Select</option>
              <option value = "college">college</option>
              <option value = "Faculty">Faculty</option>
              <option value = "Student selected">Student</option>
            </select>
          </div>
          <div className="form-group">
          <p className="lead">Id</p>
            <input
              onChange={handleChange("Id")}
              type="text"
              className="form-control my-3"
              placeholder="Id"
              value={Id}
            />
          </div>
          <div className="form-group">
          <p className="lead">AC or Non-AC</p>
            <select
              onChange={handleChange("ac")}
              className="form-control my-3"
              placeholder="AC or Non-AC"
            >
              <option>Select</option>
              <option value = "AC">AC</option>
              <option value = "Non-AC">Non-AC</option>
            </select>
          </div>
          <div className="form-group">
          <p className="lead">Beds</p>
            <input
              onChange={handleChange("beds")}
              type="number"
              className="form-control my-3"
              placeholder="Number of Beds"
              value={beds}
            />
          </div>
          <div className="form-group">
          <p className="lead">Arrival</p>
            <input
              onChange={handleChange("arrival")}
              type="date"
              className="form-control my-3"
              value={arrival}
            />
          </div>
          <div className="form-group">
          <p className="lead">Departure</p>
            <input
              onChange={handleChange("depart")}
              type="date"
              className="form-control my-3"
              value={depart}
              min={arrival}
            />
          </div>
          <div className="form-group">
          <p className="lead">Number of Occupants</p>
            <input
              onChange={handleChange("occupants")}
              type="number"
              className="form-control my-3"
              value={occupants}
            />
          </div><br/>
          <button type="submit" onClick={onSubmit} className="btn1 btn-lg">
            Submit
          </button>
        </form>
      );
    return (
        <Base
        title="Add a details here!"
        description=" "
        className="container2"
        >
          <div className="stu">
            <div className="row text-dark rounded">
                <div className="col-md-8 offset-md-2">

                   {createguestForm()}
                </div>
            </div>
           </div>
        </Base>
    )
}


export default Reception; 