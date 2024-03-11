import React from 'react'

function fullTeamsTable({index, team}) {
    console.log(team);
    return (
        
        <tr className = "flex w-full">
            <th className = "p-7 pt-3 w-1/12"><img className = " w-16 h-16 flex flex-shrink-0" src = {team[index].teamIconUrl}></img></th>
            <th className = "p-7 pl-0 w-1/6 text-lg">{team[index].teamName}</th>
            <th className = "p-7 pl-0 w-1/6 text-2xl">{index + 1}</th>
            <th className = "p-7 pl-0 w-1/6 text-2xl">{team[index].points}</th>
            <th className = "p-7 pl-0 w-1/6 text-2xl">{team[index].matches}</th>
            <th className = "p-7 pl-0 w-1/6 text-2xl">{team[index].won}</th>
            <th className = "p-7 pl-0 w-1/6 text-2xl">{team[index].lost}</th>
            <th className = "p-7 pl-0 w-1/6 text-2xl">{team[index].draw}</th>
        </tr>
    )
}

export default fullTeamsTable
