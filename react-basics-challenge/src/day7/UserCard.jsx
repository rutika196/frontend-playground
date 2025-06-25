import React, { useState } from "react";

export default function UserCard ({list}) {

    return (
        <>
        <ul>
                {list.map(({id, email}) =>
                <li key={id}>
                    ID: {id} Email: {email}</li>
                )}
            </ul>
        </>
        
    )
}