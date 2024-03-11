import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import MatchTable from "./matchTable";


export default function MatchFetch() {
  const [fData, setFData] = useState([]);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    fetch("https://api.openligadb.de/getmatchdata/%C3%B6bl1/2023").then((res) =>
      res.json().then((data) => {
        setFData(data);
        //console.log(data);
        //console.log(data[0].matchResults[1].pointsTeam1)
      })
    );
  }, []);

  return (
    <div className="w-[28%] h-1/4">
        <div className = "w-full">
            <table className = "shadow-md bg-white mt-10 ml-10 table-auto border-separate flex flex-col">
                <thead className = " font-koulen text-3xl align-top bg-lime-500 hover:bg-lime-600 p-3 mt-0 hover:cursor-pointer">
                    <tr className = "mt-8 text-center">
                        Matches
                    </tr>
                </thead>
                <tbody className ="overflow-y-scroll h-[38rem] justify-between flex flex-col">
                  {fData.map((data, index) => {
                    if(index < 13)
                    {
                      return <MatchTable key={index} index={index} match={fData} />;
                    }
                  })}
                </tbody>
            </table>    
        </div>
    </div>
  );
}
