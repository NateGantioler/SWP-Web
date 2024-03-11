import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import TeamsTable from "./teamsTable";
import { useNavigate } from 'react-router-dom';

export default function TeamsFetch() {
  const [fData, setFData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023").then((res) =>
      res.json().then((data) => {
        setFData(data);
        //console.log(data);
        //console.log(data[0].teamName)
      })
    );
  }, []);

  return (
    <div className="w-[28%] h-1/4">
        <div className = "w-full">
            <table className = "shadow-md bg-white mt-10 ml-10 table-auto border-separate flex flex-col">
                <thead className = " font-koulen text-3xl align-top bg-sky-400 hover:bg-sky-500 p-3 mt-0 hover:cursor-pointer" onClick={() => {
            navigate("/test"); 
        }}>
                    <tr className = "mt-8 text-center">
                        Teams
                    </tr>
                </thead>
                <tbody className ="overflow-y-scroll h-[38rem] justify-between flex flex-col">
                    {fData.map((data, index) => {
                        return <TeamsTable key={index} index={index} team={fData} />;
                    })}
                </tbody>
            </table>    
        </div>
    </div>
  );
}