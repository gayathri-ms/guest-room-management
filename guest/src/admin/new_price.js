import React ,{useState , useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Base from '../core/Base'
import { newprice } from '../admin/helper/adminapi';

const New_price=()=>{


    const [values,setValues]= useState({
        beds:"",
        ac:"",
        price:"",
        loading: false,
        error: "",
        newprice: "",
        didRedirect: false,
        formData : ""
    })
     
    const {
        ac,
        beds,
        price,
        loading,
        error,
        newprice,
        didRedirect,
        formData
    }= values;

    const onSubmit=(event) => {
        //
        event.preventDefault();
        setValues({...values, error: "",loading: true})
        New_price(formData).then(data =>{
          if(data.error){
            setValues({...values, error : data.error})
          }else{
            setValues({
              ...values,
              beds:"",
              ac:"",
              price:"",
              loading: false,
              didRedirect:true,
            })
          }
        })


    }


  const handleChange= name => event =>{
      const value = event.target.value ;
       // formData.set(name,value);
      setValues({...values ,[name]: value})
  };

  const successMessage =()=>(
    <div className="alert alert-success mt-3"
    style={{display : newprice ? "" : "none"}}
    >
      <h4>{newprice} created successfuly</h4>
    </div>
  )

  const performRediret = () =>{
        if (didRedirect) {
            return <Redirect to="/admin/m_dashboard" />;
        }
}

    const newpriceForm = () => (
        <form >
          <div className="form-group">
          <p className="lead">No of Beds</p>
            <input type="number"
              onChange={handleChange("beds")}
              name="beds"
              className="form-control my-4"
              placeholder="Number of Beds"
            />
          </div>
          <div className="form-group">
          <p className="lead">AC or Non-AC</p>
            <select
              onChange={handleChange("ac")}
              className="form-control my-4"
              placeholder="AC or Non-AC"
            >
              <option>Select</option>
              <option value = "AC">AC</option>
              <option value = "Non-AC">Non-AC</option>
            </select>
          </div>
          <div className="form-group">
          <p className="lead">New Price</p>
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control my-4"
              placeholder="New Price"
              value={price}
            />
          </div>
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

                   { newpriceForm() }
                   { performRediret() }
                </div>
            </div>
          </div>
        </Base>
    )
}


export default New_price; 