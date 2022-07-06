import axios from 'axios'
import React, { useEffect, useState } from 'react'
import classes from './css/movies.module.css'


const MoviesList = () => {
  const [val, setVal] = useState("");
  const [queryfromtxt, setqueryfromtxt] = useState("just");
  const [movies, setMovie] = useState([])
 
 
  const handleTrack = () => {
    if (val.length !== 0) {
      setqueryfromtxt(val)
      console.log(val)
    }
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleTrack();
    }
  };
 


  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?s=${queryfromtxt}&apikey=53f17266`)
      .then((response) => {
        console.clear()
        setMovie(response.data.Search)
      })
  }, [queryfromtxt])



  return (
    <div className={classes.container}>
       <input type="text" placeholder="Press Enter to search..." value={val} onChange={e => { setVal(e.target.value); }} onKeyPress={handleKeyPress} />
      <h2 className={classes.headingtext}>Movies <span>Gallery</span></h2>
     
      <div className={classes.imagegallery}>

        {
          movies.map((value, index) => {
            return (
              <div className={classes.column}>
                <div className={classes.imageitem}>
                  <img src={value.Poster} alt="Movie Poster" />
                  <div className={classes.overlay}><span>{value.Title}</span></div>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default MoviesList