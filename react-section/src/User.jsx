import React from 'react'

function User() {
    const customer1 = [
        { name: "Priya", age: 25, email: "priya23@gmail.com" },
    ]
    return (
        <>
            <h1>Name:{customer1[0].name}</h1>
            <Gomathi {...customer1}/>
        </>
    )
}
function Gomathi({name,age,email}) {
    return (
        <>
            <h2>Name:{name}</h2>
            <h2>Age:{age}</h2>
            <h2>Email:{email}</h2>

        </>
    )
}

export{Gomathi,User}