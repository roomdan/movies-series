import "./section-subscribe.scss";
import {useState} from "react"
import { useHistory } from "react-router";
export function Subscribe (){

    const [value, setValue] = useState('Hello, I want subscribe here!');
    const history = useHistory()

return (
    <section className='secction-subscribe'>
        <div className='subscribe-box'>
           <div className='subscribe-attractive'>
               <h1>
                   ¡Welcome!
               </h1>
           </div>
           <div className='subscribe-form'>
               <div className='subscribe-form-header'>
                   <h2>
                       Subscribe
                   </h2>
               </div>
               <form className='subscribe-form-register'>
                   <label>
                       Your Name
                       <input placeholder='What is Your Name' type='text'/>
                   </label>
                   <label>
                       Page to subscribe
                       <input placeholder='Url Page Subscibe' value='www.movies.series.com' readOnly type="url"/>
                   </label>
                   <label>
                       Optional Mensagge
                       <input placeholder='¡Hello, I want subscribe here!' value={value} onChange={e=>{setValue(e.target.value)}}/>
                   </label>
                   <button type='button' onClick={(e)=>{history.goBack()}} className='btn-subscribe-form'>All Ready</button>
               </form>
           </div>
           <div className='subscribe-handle'></div>
        </div>
    </section>
)

}