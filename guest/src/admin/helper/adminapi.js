import { API } from "../../backend";

//Api = "http://localhost:9000/api"

export const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Addguest = (user) => {
  return fetch(`${API}/addguest`, {
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

export const Login = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();

    return fetch(`${API}/Login`, {
      method: "GET",
    })
      .then((response) => console.log("signout succefull"))
      .catch((err) => console.log(err));
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const addstudent = (user) => {
  return fetch(`${API}/add-student`, {
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
  return fetch(`${API}/add-faculty`, {
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
  return fetch(`${API}/add-guest`, {
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
    return fetch(`${API}/delete-student/${Sid}`,{
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
    return fetch(`${API}/delete-faculty/${Fid}`,{
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
    return fetch(`${API}/delete-guest/${Iid}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json"
        }
        
    }).then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
    
    }
