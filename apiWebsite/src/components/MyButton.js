// import React from 'react';
// //import { gapi  } from 'react-gapi';


// export default function MyButton() {
   


//     const loadClient = async () => {
//         console.log("before");
       
//         console.log("after", gapi);
//         console.log(window.gapi);

//         // const script = document.createElement("script");
//         // script.src = "https://apis.google.com/js/api.js";
//         //  gapi.client.setApiKey("AIzaSyBpSTHzqOR-mmjk0If351rH03pokK4ycus");
//         //  return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/customsearch/v1/rest")
//         //      .then(function () { console.log("GAPI client loaded for API"); },
//         //         function (err) { console.error("Error loading GAPI client for API", err); });
//     };

//     const execute = () => {
//         alert("executing")
//         return;
//         // var searchQuery = document.getElementById('searchInput').value;
//         // return gapi.client.search.cse.list({
//         //     "cx": "1697cb11e1cae49e7",
//         //     "num": 1,
//         //     "q": searchQuery,
//         //     "start": Math.floor(Math.random() * 50) + 50,
//         //     "searchType": "image"
//         // })
//         //     .then(function (response) {
//         //         // Handle the results here (response.result has the parsed body).
//         //         console.log("Response", response);
//         //         document.getElementById('searchImage').src = response.result.items[0].link;
//         //         window.open(response.result.items[0].link)
//         //     },
//         //         function (err) { console.error("Execute error", err); });
//     };

//     return (
//         <div>
//             <button className=" bg-white hover:bg-slate-200 active:bg-slate-300 border-2 border-black text-black font-bold text-xl py-3 px-6 mt-4 mr-4 " onClick={() => loadClient()}>
//                 Load
//             </button>
//             <button className=" bg-white hover:bg-slate-200 active:bg-slate-300 border-2 border-black text-black font-bold text-xl py-3 px-6 mt-4" onClick={() => execute()}>
//                 Search
//             </button>
//         </div>
//     )
// }