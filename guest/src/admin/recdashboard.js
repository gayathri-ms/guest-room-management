import React ,{useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base'
// import { Addguest } from '../admin/helper/adminapi';

const Reception=()=>{




    const [values,setValues]= useState({
        name :"",
        address: "",
        phone: "",
        relation: "",
        ac:"",
        beds:"",
        loading: false,
        error: "",
        // addguest: "",
        getaRedirect: false,
        formData : ""
    })
     
    const {
        name,
        address,
        phone,
        relation,
        ac,
        beds,
        loading,
        error,
        // addguest,
        getaRedirect,
        formData
    }= values;

    const onSubmit=(event) => {
        //
        event.preventDefault();
        setValues({...values, error: "",loading: true})
        Reception(formData).then(data =>{
          if(data.error){
            setValues({...values, error : data.error})
          }else{
            setValues({
              ...values,
              name:"",
              address:"",
              phone:"",
              relation:"",
              ac:"",
              beds:"",
              loading: false,
              // addguest: data.name
            })
          }
        })


    }


  const handleChange= name => event =>{
      const value = event.target.value ;
       // formData.set(name,value);
      setValues({...values ,[name]: value})
  };

  // const successMessage =()=>(
  //   <div className="alert alert-success mt-3"
  //   style={{display : addguest ? "" : "none"}}
  //   >
  //     <h4>{addguest} created successfuly</h4>
  //   </div>
  // )


    const createguestForm = () => (
        <form >
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="name"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("address")}
              name="address"
              className="form-control"
              placeholder="Address"
              value={address}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("phone")}
              type="number"
              className="form-control"
              placeholder="Phone Number"
              value={phone}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("relation")}
              className="form-control"
              placeholder="Relation"
            >
              <option>Select</option>
              <option value = "Guest">Guest</option>
              <option value = "Faculty">Faculty</option>
              <option value = "Student">Student</option>
            </select>
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("ac")}
              className="form-control"
              placeholder="AC or Non-AC"
            >
              <option>Select</option>
              <option value = "AC">AC</option>
              <option value = "Non-AC">Non-AC</option>
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("beds")}
              type="number"
              className="form-control"
              placeholder="Number of Beds"
              value={beds}
            />
          </div>
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success">
            Submit
          </button>
        </form>
      );
    return (
        <Base
        title="Add a details here!"
        description=" "
        className="container bg-info p-4"
        >
            <div className="row bg-dark text-white rounded">
                <div className="col-md-8 offset-md-2">

                   {createguestForm()}
                </div>
            </div>
        </Base>
    )
}


export default Reception; 