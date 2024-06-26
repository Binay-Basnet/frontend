import React, { useEffect, useState } from 'react'
import SurveyCard from '../components/SurveyCard';
import axios from "axios"
import Header from '../components/Header';
const backendUrl = process.env.REACT_APP_BACKEND_URL
const SurveyPage = () => {
  // let url = "http://localhost:5000/survey/all"
  let url = `${backendUrl}/survey/all`



  console.log("\n\n: ", backendUrl)
  console.log("\n\n: ", url)


  const [surveys, setSurveys] = useState([])

  async function fetchData(urlpath){
    try{
      const {data} = await axios.get(urlpath);
      setSurveys(data)
    }catch(err){
      console.log(err)
      setSurveys([]) 
    }
  }

  useEffect(()=>{
    fetchData(url)
  },[url])

  return (
      <>
      <Header />
        <div>SurveyPage</div>
        <ul>
          {surveys.slice(0).reverse().map((s) => {
            return <li key = {s._id}><SurveyCard survey = {s} /></li>
          })}
        </ul>

      </>
  )
}

export default SurveyPage