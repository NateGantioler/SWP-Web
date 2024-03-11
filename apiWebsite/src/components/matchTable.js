import React from 'react'

function MatchTable({index, match}) {

    //console.log(match);
    var x = match[index].matchResults[1].pointsTeam1;
    var y = match[index].matchResults[1].pointsTeam2;
    console.log(x + " zu " + y);

    return (
        <tr className = "flex w-full">
            <th className = "pl-7 pt-3 w-1/4"><img className = "w-16 h-16 flex flex-shrink-0" src = {match[index].team1.teamIconUrl}></img></th>
            <th className = "pt-7 px-0 w-1/12 text-2xl"> vs </th>
            <th className = "p-7 pt-3 w-1/4 text-2xl"><img className = " w-16 h-16 flex flex-shrink-0" src = {match[index].team2.teamIconUrl}></img></th>
            <th className = "p-7 pl-0 w-1/6 text-2xl">{match[index].matchResults[1].pointsTeam1}:{match[index].matchResults[1].pointsTeam2}</th>
            <th className = "p-7 pl-0 pt-8 w-1/4">{match[index].matchDateTime.substring(0,10)}</th>
        </tr>
    )
}

export default MatchTable
