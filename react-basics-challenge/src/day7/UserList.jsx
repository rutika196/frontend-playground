import React, { useState } from "react";
import UserCard from "./UserCard";

export default function UserList() {

    const [users, setUsers] = useState([
        { id: 1, name: 'Alice', email: 'alice@mail.com' },
        { id: 2, name: 'Bob', email: 'bob@mail.com' },
        { id: 3, name: 'Charlie', email: 'charlie@mail.com' }
    ])

    return (
        <>
        <h3>day7</h3>
        <UserCard list={users}/>
        </>
    )
}