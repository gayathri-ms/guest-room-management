import React , {useState , useEffect}from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import { view_name } from "../admin/helper/adminapi";




const View_name=()=>{

      const [values,setvalues]= useState({
        arrival :"",
        success:"",
        formData:"",
    });
    const [guests,setguests]= useState([]);
    const {
        arrival,
        success,
        formData
    } = values;
    const preload =()=>{

       view_name({values}).then(data =>{
          console.log("data", data);
          if(data.error){
            console.log(data.error)
          }
          else{
            setvalues(data);
          }
        });
      };


      useEffect(()=>{
        preload();
      },[]);

    const handleChange=name =>(event)=>{
          const value = event.target.value ;
      setvalues({...values ,[name]: value})

    }
    const onSubmit=(event) => {
        //
        event.preventDefault();
        setvalues({...values, error: "",loading: true})
        view_name(formData).then(data =>{
            console.log("data",data);
          if(data.error){
            setvalues({...values, error : data.error})
          }else{
            setvalues({
              ...values,
              arrival:"",
              loading: false,
              success: true,
            })
          }
        })


    }

    const guestForm =()=>{
      return  <form>
            <div className="form-group">
                <p className="lead">Guets Name</p>
                <input type="text" className="form-control my-3"
                onChange={handleChange("arrival")}
                value={arrival}
                autoFocus
                required
                /><br/>


            <button type="submit" onClick={onSubmit} className="btn1 btn-lg">View Guests</button>
            </div>
        </form>
    }




    return (

         <Base title =" Welcome!!"
        description=""
        className="container2"
        >
          <div className="stu">
            <div className="row text-dark rounded">
                <div className="col-md-8 offset-md-2">
                    {guestForm()}

                    {
                       guests.map((guest,index)=>{
                       return( <div key={index} className="row text-center mb-2 ">
                          <div className="col-4">
                          <h3 className="text-white text-left">{guest.name}</h3>
                          </div>

                       </div>)

                    })}

                </div>
              </div>
           </div>
    </Base>

    )
};
export default View_name ;
