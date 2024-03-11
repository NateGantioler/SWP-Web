import React from 'react'
import Logo from './Logo';
import TeamsFetch from './teamsFetch';
import MatchFetch from './matchfetch';
import RouterButton from './NewsTable';
import { useNavigate } from 'react-router-dom';


function Main() {
    const navigate = useNavigate(); 
    return (
        <div className=" bg-stone-300 w-screen h-screen">
      <Logo/>
      <div className = "flex flex-row">
        <TeamsFetch></TeamsFetch>
        <MatchFetch></MatchFetch>
        <RouterButton/>
      </div>
    </div>
    )
}

export default Main
