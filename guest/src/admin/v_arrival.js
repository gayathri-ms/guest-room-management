import React , {useState , useEffect}from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import { view_arrival } from "../admin/helper/adminapi";




const View_arrival=()=>{

    // const [values,setValues]= useState({
    //     arrival :"",
    //     error:"",
    //     success:"",
    //     formData:"",
    // }) 
    // const {
    //     arrival,
    //     error,
    //     success,
    //     formData
    // } = values;
    const [guests,setguests]= useState([]);
    const preload =()=>{
     
       view_arrival({guests}).then(data =>{
          console.log("data", data);
          if(data.error){
            console.log(data.error)
          }
          else{
            setguests(data);
          }
        });
      };
  
  
      useEffect(()=>{
        preload();
      },[]);
    
    // const preload =()=>{
     
    //     view_arrival({arrival}).then(data =>{
    //       console.log("data", data);
    //       if(data.error){
    //         console.log(data.error)
    //       }
    //       else{
    //         setValues(data);
    //       }
    //     });
    //   };
  
  
      // useEffect(()=>{
      //   preload();
      // },[]);
    


    const handleChange=(event)=>{
      //     const value = event.target.value ;
      //  // formData.set(name,value);
      // setguests({...values ,[name]: value})
       setguests(event.target.value)
    }
    const onSubmit=(event) => {
        //
        event.preventDefault();
        setguests({...values, error: "",loading: true})
        view_arrival(formData).then(data =>{
            console.log("data",data);
          if(data.error){
            setguests({...values, error : data.error})
          }else{
            setguests({
              ...values,
              guests:"",
              loading: false,
              success: true,
            })
          }
        })


    }
    
     
    const arrivalForm =()=>{
      return  <form>
            <div className="form-group">
                <p className="lead">Arrivals</p>
                <input type="date" className="form-control my-3" 
                onChange={handleChange("guests")}
                value={guests}
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
                    {arrivalForm()}
                  
         
                      {
                          guests.map((guest,index)=>{
             
                          return( <div key={index} className="row text-center mb-2 ">
                          <div className="col-4">
                <h3 className="text-white text-left">{guest.name}</h3>
                <h3 className="text-white text-left">{guest.phone}</h3>
                <h3 className="text-white text-left">{guest.address}</h3>
                <h3 className="text-white text-left">{guest.name}</h3>

              </div>
             
            </div>)

          })
        
                    }

                </div>
            </div>
           </div>
    </Base>

    )
};
export default View_arrival ;


      
   