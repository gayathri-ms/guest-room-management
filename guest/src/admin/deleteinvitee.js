import React , {useState , useEffect}from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import { deleteinvitee} from '../admin/helper/adminapi';



const Deleteinvitee=()=>{
	 const [Iid,setIid]= useState();
     const [iid,setiid] = useState("")
     const [error , setError]= useState(false)
     const [success,setSuccess]=useState(false)
	 
     const delete_invitee =iid =>{


        deleteinvitee(iid).then(data =>  {
            if(data.error){
                console.log(data.error);
            }
            else{
            	setIid(iid)
            }
        })
    }

     const handleChange=(event)=>{
        //
        setError("");
        setIid(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        setError("");
        setSuccess(true);

        //backend request fired
          Deleteinvitee({iid})
          .then(data=>{
            if(data.error){
                setError(true)
            }
            else{
                setError("")
                setSuccess(true);
                setIid("");

            }
        })
      

    }

    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to Delete Employee</h4>
        }
    };
    
    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Employee deleted successfully...!
                </h4>
        }
     }

    const inviteeForm =()=>{
      return  <form>
                <div className="form-group">
                <p className="lead">Invitee ID</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange}
                value={Iid}
                autoFocus
                required
                placeholder=
                "ID"/>
            
            <button onClick={onSubmit} className="btn1 btn-lg">Delete Employee</button>
            </div>
        </form>
    }

     return (
    <Base title =" Delete Employee Here"
        description="Delete an Employee"
        className="container2"
        >
           <div className="stu">
            <div className="row text-dark rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {inviteeForm()}

                </div>
            </div>
           </div>
    </Base>

    )
 
}
export default Deleteinvitee;
