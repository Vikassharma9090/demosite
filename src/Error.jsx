import React from "react";
import { NavLink } from "react-router-dom";

const Error=()=>{
    return(
        <>
            <div className="my_style2">
            <h1 style={{fontSize:"30px"}}> 404 Error Page</h1>
            <br/>
            <p>Sorry, This Page doesn't Exist</p>
              <NavLink to="/">Go Back</NavLink>
            </div>
        </>
    );
};
export default Error;