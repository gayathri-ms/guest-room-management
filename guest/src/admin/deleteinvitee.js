// import React , {useState , useEffect}from 'react';
// import { Link } from 'react-router-dom';
// import Base from '../core/Base';
// import { deleteinvitee} from './helper/adminapi';



// const Deleteinviteet=()=>{
// 	 const [Iid,setIid]= useState();
   
// 	 const delete_invitee =iid =>{


//         deletestudent(iid).then(data =>  {
//             if(data.error){
//                 console.log(data.error);
//             }
//             else{
//             	setIid(iid)
//             }
//         })
//     }

//      const handleChange=(event)=>{
//         //
//         setError("");
//         setIid(event.target.value)
//     }

//     const onSubmit=(event)=>{
//         event.preventDefault();
//         setError("");
//         setSuccess(true);

//         //backend request fired
//           Deletestudent({iid})
//           .then(data=>{
//             if(data.error){
//                 setError(true)
//             }
//             else{
//                 setError("")
//                 setSuccess(true);
//                 setIid("");

//             }
//         })
      

//     }

//     const errorMessage=()=>{
//         if(error){
//             return <h4 className="text-danger">Failed to Delete Invitee</h4>
//         }
//     };
    
//     const successMessage=()=>{
//         if(success){
//             return <h4 className="text-success">Invitee deleted successfully...!
//                 </h4>
//         }
//      }

//     const inviteetForm =()=>{
//       return  <form>
//                 <div className="form-group">
//                 <p className="lead">Invitee ID</p>
//                 <input type="text" className="form-control my-3" 
//                 onChange={handleChange}
//                 value={Iid}
//                 autoFocus
//                 required
//                 placeholder=
//                 "ID"/>
            
//             <button onClick={onSubmit} className="btn btn-outline-info">Delete Invitee</button>
//             </div>
//         </form>
//     }

//      return (
//     <Base title =" Delete Invitee Here"
//         description="Delete an Invitee"
//         className="container bg-info p-4"
//         >
//             <div className="row bg-white rounded">
//                 <div className="col-md-8 offset-md-2">
//                     {successMessage()}
//                     {errorMessage()}
//                     {inviteeForm()}

//                 </div>
//             </div>
//     </Base>

//     )
 
// }
// export default Deleteinvitee;
