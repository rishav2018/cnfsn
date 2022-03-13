import React, { useState ,useEffect} from 'react'
import Card from './Card'
export default function Mainbody(props) {
  const [datapost,setDatapost] = useState()



  useEffect(() => {
    async function fetchData (){
      await  fetch('http://localhost:9000/api')
        .then(data => data.json())
        .then(finalData=>setDatapost(finalData))
}
fetchData()
  }, [])
  return (
    <div className='container confession-body'>
            <div className="confession-card-wrappers">
           <div className="row">
             {
               !datapost?<h1 style={{textAlign:'center',fontSize:"20px"}}>Loading...</h1>:datapost.reverse().map((data)=>{
                 return(
                   <Card title={data.title} confession={data.confession} likes={data.likes} id= {data._id} dislikes={data.dislikes} date={data.date}/>
                 ) 
               })
             }


     
           </div>
            </div>
        </div>
  )
}
