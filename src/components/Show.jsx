import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './show.css'
const Show = (props) => {
    let data = props.movie
    // (e) =><NavLink key={data.id} to='/single' ></NavLink>
  return (
      <Link className="container" to= {`/single/${data.id}`} >
        <div >
        <img src={data.image_url}/>
        <h3> {data.movie_name}</h3>
        </div>
        </Link>
  )
}

export default Show