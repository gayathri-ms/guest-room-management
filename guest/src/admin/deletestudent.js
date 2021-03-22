import React , {useState , useEffect}from 'react';
import { Link ,Redirect} from 'react-router-dom';
import Base from '../core/Base';
import { deletestudent} from '../admin/helper/adminapi';



const Deletestudent=()=>{
	 const [sid,setsid]= useState("");
     const [didRedirect , setdidRedirect]= useState(false)
     const [error , setError]= useState(false)
     const [success,setSuccess]=useState(false)

	 const delete_student =sid =>{


        deletestudent(sid).then(data =>  {
            if(data.error){
                console.log(data.error);
            }
            else{
            	setsid(sid)
            }
        })
    }

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
          Deletestudent({sid})
          .then(data=>{
            if(data.error){
                setError(true)
            }
            else{
                setError("")
                setSuccess(true);
                setsid("");
                setdidRedirect(true);

            }
        })
      

    }

    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to Delete student </h4>
        }
    };
    
     const performRediret = () =>{
        if (didRedirect) {
            return <Redirect to="/admin/admindashboard" />;
        }
       }

    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Student deleted successfully...!
                </h4>
        }
     }

    const studentForm =()=>{
      return  <form>
                <div className="form-group">
                <p className="lead">Student ID</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange}
                value={sid}
                autoFocus
                required
                placeholder=
                "ID"/>
            
            <button onClick={onSubmit} className="btn1 btn-lg">Delete Student</button>
            </div>
        </form>
    }

     return (
    <Base title =" Delete Student Here"
        description="Delete a student"
        className="container2"
        >
          <div className="stu">
            <div className="row text-dark rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {studentForm()}
                    { performRediret()}

                </div>
            </div>
          </div>
    </Base>

    )
 
}
export default Deletestudent ;
