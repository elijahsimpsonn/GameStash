import React, { useState } from 'react'
import Main from '../../api/Main'
import { useParams, useLocation } from 'react-router-dom'

const AddGameForm = () => {
    const { id } = useParams()
    const location = useLocation()

    const [title, setTitle] = useState("")
    const [condition, setCondition] = useState("")


    const handleSubmitReview = async (e) => {
        e.preventDefault()
        try {
        const response = await Main.post(`/consoles/${id}/addGame`, {
            title,
            condition
        })
        window.location = location.pathname
        } catch(err) {
            console.log(err)
        }
    }
    
    return (
        <div>
            <form action="">
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="title"/>
                <input value={condition} onChange={(e) => setCondition(e.target.value)} type="text" placeholder="condition"/>
                <button onClick={handleSubmitReview}>Add Game</button>
            </form>
        </div>
    )
}

export default AddGameForm
