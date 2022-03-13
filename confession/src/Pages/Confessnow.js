import React,{useEffect,useState} from 'react'

export default function Confessnow() {
  const [title,setTitle] = useState()
  const [msg,setMsg] = useState()
 
  

  function sendData (){
      if(msg.length<=10)
        alert("Please enter atleast 10 character of msg")
      else
  fetch('/api',{
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
      
    },
    body: JSON.stringify({ 
      
    title: title?title:"Anonymous",
    confession: msg
  })
  }).then(res=>res.ok?alert("Confession Submitted Successfully!"):alert("Something went wrong!"))
// clicks on a like / diskile button -> post request on backend (api/likes) with uniqne id  -> updates the database 
}
  return (
    <div className='container confession-body'>
    <div className="confession-card-wrappers">
        <div className="conf-title-e">
          <h2>CONFESS SOMETHING:</h2>
          <input type="text" onChange={e=>setTitle(e.target.value)} placeholder='Your Identity   ( Not recommended / Optional )' />
        </div>
        <div className="text-area">
          <textarea name="" id="" onChange={e=>setMsg(e.target.value)} rows="10" placeholder='Your confession (required)'></textarea>
        </div>
        <button type="button" onClick={sendData} className="btn btn-dark">Confess Out!</button>

        <br />
   
        
    </div>
    </div>

  )
}
