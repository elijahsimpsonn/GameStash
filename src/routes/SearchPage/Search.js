import React from 'react'
import './Search.css'
import {Link} from 'react-router-dom'

export default function Search() {
    return (
        <section>
            <form action="submit">
                <input type="text" placeholder="Title..."/>
                <br/>
                <div className="buttons">
                <button>Search</button>
                <Link to="/home"><button className='home_button'>Home</button></Link>
           </div>   
           </form>
        </section>
    )
}
