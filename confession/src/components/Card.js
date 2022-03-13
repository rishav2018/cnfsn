import {React} from 'react'
import {AiFillLike,AiFillDislike} from 'react-icons/ai'
import Moment from 'react-moment';

export default function Card(props) {

  const id= props.id
  return (

           <div className="col-12 col-lg-3">

     
<div className="cards-confss">
        
        <div className="title">
            <h2>
                  {props.title}
            </h2>
        </div>
      
        <div className="desc-short">
            {props.confession}
           </div>
        <div className="like-wrapper">





     <AiFillLike onClick={()=>
    {
      fetch('http://localhost:9000/api/ratings', {
        method :"POST",
         
                  headers: {
                    'Content-Type': 'application/json',

                  },
                  body: JSON.stringify({ 
                    postid  : props.id,
                    likes:props.likes,
                  
                  })
                })
                
                
    }}/> {props.likes}








     <AiFillDislike  style={{marginLeft:'10px'}} onClick={()=>
    {


      console.log("Dislike the post "+ id)





    }}/> {props.dislikes}


















        </div>
        <br />
        <div className="conf-nmbr">
             <Moment date = {props.date} format="y/M/w hh:mm:ss"/>
        </div>
     </div>

      </div>

  )
}
