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
            <br/>
                <div className="jumbotron text-white text-center">
                    <h2 className="display-5">
                      {title}
                    </h2>
                    <p className="lead">{description}</p>

                </div>
               <div className={className}>{children}</div>
       </div>  
       
        </div>
    )
}
export default Base;