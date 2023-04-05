import React, { useEffect, useState } from 'react'
import useFetch from '../../../customHooks/useFetch'
import { useNavigate } from 'react-router-dom'
import "./HeroBanner.scss"
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper'
import Img from '../../../components/LazyLoadImage/LazyLoadImage'
const HeroBanner = () => {
   const navigate=useNavigate();
  const [background,setBackground]=useState('')
  const [query,setQuery]=useState("")
  const {data,loading}=useFetch("/movie/upcoming")
 

  useEffect(()=>
  { 
       const uniqueBg= data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path
      const bg= `https://image.tmdb.org/t/p/original/${uniqueBg}`
      console.log(bg)
      setBackground(bg)
  },[data])

   const searchQueryHandle=(e)=>
   {
      if(e.key==="Enter" && query.length>0)
      {
        navigate(`/search/${query}`)
      }
   }




  return (
    <div className='herobanner' >
    <ContentWrapper>
    <div className='banner-image'>
    <Img src={background}/>
    </div>
      <div className='herobanner-content'>
      <h1>Welcome</h1>
      <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
      <input type="text" 
      className='herobanner-input'
      placeholder='Search for a movie or a tv show...'
      onChange={(e)=>setQuery(e.target.value)}
      onKeyUp={searchQueryHandle}
      />
      <button onClick={searchQueryHandle}>
      Search
      </button>
      </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner