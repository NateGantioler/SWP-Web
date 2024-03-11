import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import TeamsTable from "./teamsTable";
import newsImage from "../img/news.png";


export default function NewsTable() {
  const [fData, setFData] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023").then((res) =>
      res.json().then((data) => {
        setFData(data);
      })
    );
  }, []);

  return (
    <div className="w-[42%] h-1/4 flex">
        <div className = "w-full">
            <table className = "shadow-md bg-white mt-10 ml-10 table-auto border-separate flex flex-col">
                <thead className = " font-koulen text-3xl align-top bg-red-500 hover:bg-red-600 p-3 mt-0 hover:cursor-pointer">
                    <tr className = "mt-8 text-center">
                        News
                    </tr>
                </thead>
                <tbody className ="h-[38rem] justify-between flex flex-col">
                    <img className = "flex h-full" src = {newsImage}></img>
                </tbody>
            </table>    
        </div>
    </div>
  );
}