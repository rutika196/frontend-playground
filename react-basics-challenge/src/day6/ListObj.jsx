import React, { useState } from 'react';

export default function ListObj() {
    const [users, setUsers] = useState([
        { id: 1, name: 'Alice' },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
    ])

    return (
        <>
            <ul>
                {users.map(({id, name}) =>
                <li key={id}>
                    ID: {id} Name: {name}</li>
                )}
            </ul>
        </>
    )
}