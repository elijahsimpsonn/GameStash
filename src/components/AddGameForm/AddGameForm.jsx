import React, { useState } from 'react'

const AddGameForm = () => {
    const [title, setTitle] = useState("")
    const [condition, setCondition] = useState("")


    return (
        <div>
            <form action="">
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="title"/>
                <input value={condition} onChange={(e) => setCondition(e.target.value)} type="text" placeholder="condition"/>
                <button>Add Game</button>
            </form>
        </div>
    )
}

export default AddGameForm
