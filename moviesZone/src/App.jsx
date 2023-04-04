import { useState, useEffect} from 'react'
import { fetchDataFromApi } from './utils/api'


function App() {
   useEffect(()=>
   {
       getData()
   },[])

   const getData=()=>
   {
        fetchDataFromApi("/movie/latest")
          .then((result)=>console.log(result))
   }
  return (
    <div className="App">
     
    <h1>App</h1>
    </div>
  )
}

export default App
