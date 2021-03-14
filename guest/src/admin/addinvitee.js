import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import { isAuthenticated } from '../helper/adminapi';
import Base from '../core/Base';


const Addinvitee=()=>{


    const [name,setName] = useState("")
    const [Iid,setIid] = useState("")
    const [error , setError]= useState(false)

    const [success,setSuccess]=useState(false)

    // const {user, token}= isAuthenticated();
    const handleChange=(event)=>{
        //
        setError("");
        setName(event.target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        setError("");
        setSuccess(false);

        //backend request fired
        Addinvitee({name,Iid})
        .then(data=>{
            if(data.error){
                setError(true)
            }
            else{
                setError("")
                setSuccess(true);
                setName("");
                setIid("");

            }
        })
      

    }
    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Invitee added successfully...!
                </h4>
        }

    }
    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to add the Invitee </h4>
        }
    };
    const inviteeForm =()=>{
      return  <form>
            <div className="form-group">
                <p className="lead">Name</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange}
                value={name}
                autoFocus
                required
                placeholder=
                "Invitee Name"/><br/><br/>
                <p className="lead">Invitee ID</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange}
                value={Iid}
                autoFocus
                required
                placeholder=
                "ID"/>
            
            <button onClick={onSubmit} className="btn btn-outline-info">Add Invitee</button>
            </div>
        </form>
    }

   
     
    return (
    <Base title =" Add Invitee Here"
        description="Add a new invitee"
        className="container bg-info p-4"
        >
            <div className="row bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {inviteeForm()}
                </div>
            </div>
    </Base>

    )
    }

export default Addinvitee ;