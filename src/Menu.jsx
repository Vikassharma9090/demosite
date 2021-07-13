import React from "react"; 
import {NavLink} from "react-router-dom";

const Menu=()=>{
    return(
        <>

            <div className="menu_style">
            <NavLink exact activeClassName="active_class" to="/">AboutUS</NavLink>
            <NavLink exact activeClassName="active_class" to="/service">Service</NavLink>
            <NavLink exact activeClassName="active_class" to="/search">Search</NavLink>
            <NavLink exact activeClassName="active_class" to="/User/vikas/sharma">User</NavLink>
            <NavLink exact activeClassName="active_class" to="/contact">Contact</NavLink>
            </div>
           
        </>
    );
};
export default Menu;