import React, { useState } from 'react'

const UseEffectPractice = () => {
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>res.json())
        .then(data=>setUsers(data));
    },[
    ])
  return (
    <div>UseEffectPractice
        <ul>
            {users.map(user=>
                <li key={user.id}>{user.name}</li>
            )}
        </ul>
    </div>
  )
}

export default UseEffectPractice