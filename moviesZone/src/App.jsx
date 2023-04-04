import { useState, useEffect} from 'react'
import { fetchDataFromApi } from './utils/api'
import { useDispatch,useSelector } from 'react-redux'
import { getConfiguration } from './Redux/slices/homeSlice';

function App() {
  const dispatch=useDispatch();
   useEffect(()=>
   {
    getData()
   },[])

   const getData=()=>
   {
        fetchDataFromApi("/movie/latest")
          .then((result)=>{
            console.log(result)
            dispatch(getConfiguration(result))
          })
   }
  return (
    <div className="App">
     
    <h1>App</h1>
    </div>
  )
}

export default App
