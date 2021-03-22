import React , {useState , useEffect}from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';
import { deletefaculty} from '../admin/helper/adminapi';



const Deletefaculty=()=>{
	 const [Fid,setFid]= useState("");
     const [fid,setfid] = useState("")
     const [error , setError]= useState(false)
     const [success,setSuccess]=useState(false)
	 const deletefaculty =fid =>{


        deletefaculty(fid).then(data =>  {
            if(data.error){
                console.log(data.error);
            }
            else{
            	setFid(fid)
            }
        })
    }

     const handleChange=(event)=>{
        //
        setError("");
        setFid(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        setError("");
        setSuccess(true);

        //backend request fired
            Deletefaculty({fid})
            .then(data=>{
            if(data.error){
                setError(true)
            }
            else{
                setError("")
                setSuccess(true);
                setFid("");

            }
        })
      

    }

    const errorMessage=()=>{
        if(error){
            return <h4 className="text-danger">Failed to Delete faculty </h4>
        }
    };
    
    const successMessage=()=>{
        if(success){
            return <h4 className="text-success">Faculty deleted successfully...!
                </h4>
        }
    }

    const facultyForm =()=>{
      return  <form>
                <div className="form-group">
                <p className="lead">Faculty ID</p>
                <input type="text" className="form-control my-3" 
                onChange={handleChange}
                value={Fid}
                autoFocus
                required
                placeholder=
                "ID"/>
            
            <button onClick={onSubmit} className="btn1 btn-lg">Delete Faculty</button>
            </div>
        </form>
    }

     return (
    <Base title =" Delete Faculty Here"
        description="Delete a faculty"
        className="container2"
        >
          <div className="stu">
            <div className="row text-dark rounded">
                <div className="col-md-8 offset-md-2">
                    {successMessage()}
                    {errorMessage()}
                    {facultyForm()}

                </div>
            </div>
          </div>
    </Base>

    )
 
}
export default Deletefaculty ;
