import {NavLink} from 'react-router-dom'
import React from 'react'
const links = [

  {
    title: "Home",
    to: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    to: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    to: "/movies",
    id: "header-link-movies",
  },
  
];
 const Navbar = () => {
  return (
    <>
    {links.map(({title,to},id)=>{
        return <NavLink key={id} to={to} style={{padding:10,textDecoration:'none'}}>{title}</NavLink>
    })}
    </>
  )
};

export default Navbar