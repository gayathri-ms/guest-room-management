<footer className="footer mt-auto py-1">
         <div class="foot">
           <div className="container-fluid text-white text-center py-2">
               <h4>
                   If u get any questions,feel free to reach out!
               </h4>
               <button className="btn btn-warning btn-lg ">Contact us</button>
           </div>
          </div>
       </footer>


 // if(isAuthenticated()){
        //      return <Redirect to="/"></Redirect>;
        // }



import React , {useState , useEffect}from 'react';
import { Link ,Redirect} from 'react-router-dom';
import Base from '../core/Base';
import { delete_sr} from '../admin/helper/adminapi';



const Delete_sr=()=>{
     const [sid,setsid]= useState("");
     const [rid,setrid]= useState("");
     const [didRedirect , setdidRedirect]= useState(false)
     const [error , setError]= useState(false)
     const [success,setSuccess]=useState(false)

    //  const deletesr =sid =>{


    //     delete_sr(sid,rid).then(data =>  {
    //         if(data.error){
    //             console.log(data.error);
    //         }
    //         else{
    //             setsid(sid)
    //         }
    //     })
    // }

     const handleChange=(event)=>{
        //
        setError("");
        setsid(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        setError("");
        setSuccess(true);

        //backend request fired
          Delete_sr({sid,rid})
          .then(data=>{
            if(data.error){
                setError(true)
            }
            else{
                setError("")
                setSuccess(true);
                setsid("");
                setrid("");
                setdidRedirect(true);

            }
        })
      

    }

    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to Delete staff details </h4>
        }
    };
    
     const performRediret = () =>{
        if (didRedirect) {
            return <Redirect to="/admin/m_dashboard" />;
        }
       }

    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Staff Details deleted successfully...!
                </h4>
        }
     }

    const staffForm =()=>{
      return  <form>
                <div className="form-group">
                <p className="lead">Staff ID</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange}
                value={sid}
                autoFocus
                required
                placeholder=
                "Staff ID"/>

                 <div className="form-group">
                <p className="lead">Room ID</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange}
                value={rid}
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
                    { performRediret()}

                </div>
            </div>
          </div>
    </Base>

    )
 
}
export default Delete_sr ;




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