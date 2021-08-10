import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import "./sidebar.css"

export default function Sidebar() {
    const [cats,setCats]= useState([]);

useEffect(()=>{
    const getCats=async ()=>
    {
        const res = await axios.get("/categories")
        setCats(res.data)
    }
    getCats();
},[])

    return (
        <div className="sideBar">
            <div className="sidebarItem">
                <span className="sidebarTitle"> ABOUT ME </span>
                <img  src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio doloremque quae tempore, ipsum recusandae facere laboriosam at esse nam eaq
                </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle"> CATEGORIES </span>
            <ul className="sidebarList">
            {cats.map(c=>(
                <Link className="link" to={`/cat=${c.name}`}>
                <li className="sidebarListItem">{c.name}</li>
                </Link>
               
            ))}
              
               

            </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
