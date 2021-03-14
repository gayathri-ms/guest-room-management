import React from 'react';
import Menu from './Menu';

 const Base=({
     title="",
     description= " ",
     className=" ",
     children
})=>{
    return (
     
        <div>
              <Menu />
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h2 className="display-5">
                      {title}
                    </h2>
                    <p className="lead">{description}</p>

                </div>
               <div className={className}>{children}</div>
       </div>  
       <footer className="footer bg-dark mt-auto py-3">
           <div className="container-fluid bg-success text-white text-center py-3">
               <h4>
                   If u got any questions,feel free to reach out!
               </h4>
               <button className="btn btn-warning btn-lg ">Contact us</button>
           </div>
          
       </footer>
        </div>
    )
}
export default Base;