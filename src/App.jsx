import { useEffect,useState } from 'react'
import './style.css'
import GetQuote from './functions/GetQuote'
function App(props) {
 
  const [quote,setQuote] = useState("")

  const getQuote = () =>{
      fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) =>{
        let randomNum = Math.floor(Math.random() * data.length)
        setQuote(data[randomNum])
      })
    } 
  useEffect(() =>{
    getQuote()
  },[])


  return (
    <>
      <div className='main-container'>
       
        <div className='container'>
        <h1>Quote Generator</h1>
          <h3>" {quote.text} "</h3> 
          <h4>{quote.author}</h4> 
          
          <div>
            <button className='btn' onClick={getQuote}> 
                <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className='sparkle'>
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z">
                </path>
                </svg>

                <span className='text'>Generate</span>
           </button>
          </div>
         
        </div>
      </div>
     
    </>
  )
}

export default App
