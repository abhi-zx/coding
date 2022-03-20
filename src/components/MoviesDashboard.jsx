import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios';
import Show from "./Show";
import './Dash.css';

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  const [list, setList] = useState([])
  const [data, setData] = useState([])
  const [check, setCheck] = useState('')
  // const dispatch= useDispatch()
  //   // to get all movies list on component mounts
  // useEffect(() => {
  //   //   dispatch an action to the store 

  // }, [dispatch]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://movie-fake-server.herokuapp.com/data'
    }).then(res => {
      setList(res.data)
      setData(res.data)
    })
  }, [])

  useEffect(() => {
    setList(data)
    setList(list.filter((val) => {
      return val.genre === check
    }
    ))

  }, [check])
  const handleFilter = (e) => {
    // dispach filterby genre action to the 

    setCheck(e.target.value);

  }
  return (
        <>
        <h2>Movies</h2>
        <select onChange={handleFilter}>
        <option value="Comedy">Comedy</option>
        <option value="Thriller">Thriller</option>
        <option value="Drama">Drama</option>
        <option value="Documentary">Documentary</option>
        <option value="ComChildrenedy">Children</option>
        </select>
        <div className="movies-list">
          {/* map throught th movie list and display the results */
          list.map((movie) => {
            return <Show key={movie.id} movie={movie}></Show>
          })

        }
      </div>
    </>
  );
};
