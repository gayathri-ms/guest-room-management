import  API  from "../../guest-room-management/server.py";

//Api = "http://localhost:3000/api"

// export const signup = (user) => {
//   return fetch(`${API}/signup`, {
//     method: 'POST',
//     headers: {..
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(user),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const Addguest = (user) => {
  return fetch('${API}/check_in', {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const authentication = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const check_room = (user) => {
  

    return fetch('${API}/check_room', {
      method: "GET",
    })
      .then((response) =>{
       return response.json();
     })
      .catch((err) => console.log(err));
  }
  export const check_id = (user) => {
  

    return fetch('${API}/check_relation', {
      method: "GET",
    })
      .then((response) =>{
       return response.json();
     })
      .catch((err) => console.log(err));
  }



// export const Login = (user) => {
//   return fetch('${API}/login', {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch(err => console.log(err));
// };


// export const isAuthenticated = () => {
//   if (typeof window == "undefined") {
//     return false;
//   }
//   if (localStorage.getItem("jwt")) {
//     return JSON.parse(localStorage.getItem("jwt"));
//   } else {
//     return false;
//   }
// };

export const addstudent = (user) => {
  return fetch('${API}/add_student', {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const addfaculty = (user) => {
  return fetch('${API}/add_faculty', {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const addinvitee = (user) => {
  return fetch('${API}/add_employee', {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const deletestudent = (Sid)=>{
    return fetch('${API}/delete_student}',{
        method:"DELETE",
        headers:{
            Accept:"application/json"
        }
        
    }).then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
    
    }

    export const deletefaculty = (Fid)=>{
    return fetch('${API}/delete_faculty',{
        method:"DELETE",
        headers:{
            Accept:"application/json"
        }
        
    }).then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
    
    }

    export const deleteinvitee= (Iid)=>{
    return fetch('${API}/delete_employee',{
        method:"DELETE",
        headers:{
            Accept:"application/json"
        }
        
    }).then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
    
    }

    export const newprice= (user) => {
  return fetch('${API}/room_price_change', {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const addsr = (user) => {
  return fetch('${API}/add_staff_room', {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch(err => console.log(err));
};

 export const delete_sr = (user)=>{
    return fetch('${API}/delete_staff_room',{
        method:"DELETE",
        headers:{
            Accept:"application/json"
        }
        
    }).then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
    
  }
 
// export const view_name = ()=>{
//     return fetch('${API}/view_by_name',{
//         method:"GET",
//         headers:{
//             Accept:"application/json",
//             "Content-Type":"application/json",
//         }
//     }).then(response=>{
//         return response.json()
//     })
//     .catch(err=>console.log(err)) 
//     }

//     export const view_arrival = ()=>{
//     return fetch('${API}/view_by_arrival',{
//         method:"GET",
//         headers:{
//             Accept:"application/json",
//             "Content-Type":"application/json",
//         }
//     }).then(response=>{
//         return response.json()
//     })
//     .catch(err=>console.log(err)) 
//     }