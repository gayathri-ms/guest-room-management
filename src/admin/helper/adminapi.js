//import  API  from "../../guest-room-management/server.py";

const API = "http://localhost:8080/api"

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
  return fetch('http://localhost:8080/api/check_in', {
    method: "POST",
    mode: 'no-cors',
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
    return fetch('http://localhost:8080/api/check_room', {
      method: "GET",
      mode: 'no-cors',
    })
      .then((response) =>{
       return response.json();
     })
      .catch((err) => console.log(err));
  }
  export const check_id = (user) => {


    return fetch('http://localhost:8080/api/check_relation', {
      method: "GET",
      mode: 'no-cors',
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
// };$


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
  return new Promise((resolve,reject)=>{
  fetch(`${API}/add_student`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
}).then((response) => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const addfaculty = (user) => {
  return new Promise((resolve,reject)=>{
    fetch(`${API}/add_faculty`, {
    method: "POST",
    mode: 'no-cors',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
}).then((response) => {
      return response.json();
    }).then(json => console.log(json));
};

export const addinvitee = (user) => {
  return new Promise((resolve,reject)=>{
    fetch(`${API}/add_employee`, {
    method: "POST",
    mode: 'no-cors',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
}).then((response) => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const deletestudent = (Sid)=>{
    return new Promise((resolve,reject)=>{
    fetch(`${API}/delete_student`,{
        method:"POST",
        mode: 'no-cors',
        headers:{
            Accept:"application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Sid),
    })
  }).then(response=>{
        return response.json()
    }).then(json => console.log(json))
    .catch(err=>console.log(err))

};

    export const deletefaculty = (Fid)=>{
    return new Promise((resolve,reject)=>{
      fetch('http://localhost:8080/api/delete_faculty',{
        method:"POST",
        mode: 'no-cors',
        headers:{
            Accept:"application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Fid),
      })
    }).then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))

    }

    export const deleteinvitee= (Iid)=>{
    return new Promise((resolve,reject)=>{
      fetch('http://localhost:8080/api/delete_employee',{
        method:"POST",
        mode: 'no-cors',
        eaders:{
            Accept:"application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Iid),
      })
    }).then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))

    }

    export const newprice= (user) => {
  return new Promise((resolve,reject)=>{
    fetch('http://localhost:8080/api/room_price_change', {
    method: "POST",
    mode: 'no-cors',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
}).then((response) => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const addsr = (user) => {
  return new Promise((resolve,reject)=>{
    fetch(`${API}/add_staff_room`, {
    method: "POST",
    mode: 'no-cors',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
}).then((response) => {
      return response.json();
    })
    .catch(err => console.log(err));
};

 export const delete_sr = (user)=>{
    return new Promise((resolve,reject)=>{
      fetch(`${API}/delete_staff_room`,{
        method:"POST",
        mode: 'no-cors',
        headers:{
            Accept:"application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
})
    }).then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))

  }

export const view_name = (user)=>{
  return new Promise((resolve,reject)=>{
     fetch('http://localhost:8080/api/view_by_name',{
        method:"POST",
        mode: 'no-cors',
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
        },
        body: JSON.stringify(user),
      })
    }).then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
    }

    export const view_arrival = (user)=>{
    return new Promise((resolve,reject)=>{
      fetch('http://localhost:8080/api/view_by_arrival',{
        method:"GET",
        mode: 'no-cors',
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
        },
        body: JSON.stringify(user), 
      })
    }).then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
    }
