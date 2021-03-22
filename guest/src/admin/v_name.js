import React , {useState , useEffect}from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import { view_name } from "../admin/helper/adminapi";




const View_name=()=>{

    const [guests,setguests]= useState([]);
    const preload =()=>{
     
        view_name().then(data =>{
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
    

    // const deleteThisProduct =productId =>{
    //     deleteProduct(productId,user._id,token).then(data =>  {
    //         if(data.error){
    //             console.log(data.error);
    //         }
    //         else{
    //             preload()
    //         }
    //     })
    // }

    return (
        <Base title="Welcome!!" description="">
      <h2 className="mb-4">All guests:</h2>
      <Link className="btn1 btn-lg" to={`/admin/m_dashboard`}>
        <span className="">Manager Dashboard</span>
      </Link>
      <div className="row">
        <div className="col-12">
         
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
    </Base>
    )
}

export default View_name;