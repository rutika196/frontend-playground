import React, { useState } from "react";

const SimpleForm = () => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted !")
        setInput('');
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SimpleForm;