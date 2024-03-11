import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import FullTeamsTable from "./fullTeamsTable";

function Teams() {

  const [fData, setFData] = useState([]); 

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023").then((res) =>
      res.json().then((data) => {
        setFData(data);
        //console.log(data);
        //console.log(data[0].teamName)
      })
    );
  }, []);

    const navigate = useNavigate(); 
    return (
      <div className=" bg-stone-300 w-screen h-screen">
      <Logo/>
      <div>
      <div className="w-[98%] h-1/4">
        <div className = "w-full">
            <table className = "shadow-md bg-white mt-10 ml-10 table-auto border-separate flex flex-col">
                <thead className = " font-koulen text-3xl align-top bg-sky-400 hover:bg-sky-500 p-3 mt-0 hover:cursor-pointer" onClick={() => {
            navigate("/"); 
        }}>
                    <tr className = "mt-8 text-center">
                        Back
                    </tr>
                </thead>
                <tbody className ="overflow-y-scroll h-[42rem] justify-between flex flex-col">
                <tr className = "flex w-full">
                    <th className = "p-7 pl-4 w-1/12 text-2xl">Icon</th>
                    <th className = "p-7 pl-0 w-1/6 text-2xl">Teamname</th>
                    <th className = "p-7 pl-0 w-1/6 text-2xl">Place</th>
                    <th className = "p-7 pl-0 w-1/6 text-2xl">Points</th>
                    <th className = "p-7 pl-0 w-1/6 text-2xl">Matches</th>
                    <th className = "p-7 pl-0 w-1/6 text-2xl">Won</th>
                    <th className = "p-7 pl-0 w-1/6 text-2xl">Lost</th>
                    <th className = "p-7 pl-0 w-1/6 text-2xl">Draw</th>
                </tr>
                    {fData.map((data, index) => {
                        return <FullTeamsTable key={index} index={index} team={fData} />;
                    })}
                </tbody>
            </table>    
        </div>
    </div>
      </div>
    </div>
    )
}

export default Teams
