import React from 'react'

function Card({name, title}) {
    return (
        <div className ='border-2 w-64 p-4 m-2' >
            <div className = 'text-white'>{name}</div>
            <div className = 'text-white'>{title}</div>
            <img src="https://picsum.photos/200/300" alt=''></img>
        </div> 
    )
}

export default Card