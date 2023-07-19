import "./leaderboard.css";
import LeaderboardTable from "./leaderboard";
import { useState, useEffect } from "react";

// Sample data for leaderboard
const leaderboardData = [
  {
    group: "Indiana JONES",
    house: "Sadness",
    day1Point: 50,
    day2Point: 60,
    day3Point: 70,
  },
  {
    group: "LARA Croft",
    house: "Sadness",
    day1Point: 40,
    day2Point: 50,
    day3Point: 60,
  },
  {
    group: "FEARaun",
    house: "Fear",
    day1Point: 30,
    day2Point: 40,
    day3Point: 50,
  },
  {
    group: "FEARamid",
    house: "Fear",
    day1Point: 20,
    day2Point: 30,
    day3Point: 40,
  },
  {
    group: "GOTbusters",
    house: "Disgust",
    day1Point: 10,
    day2Point: 20,
    day3Point: 30,
  },
  {
    group: " TRASHformers",
    house: "Disgust",
    day1Point: 20,
    day2Point: 30,
    day3Point: 40,
  },
  {
    group: "seriGALAK",
    house: "Anger",
    day1Point: 30,
    day2Point: 40,
    day3Point: 50,
  },
  {
    group: "capyMARAH",
    house: "Anger",
    day1Point: 40,
    day2Point: 50,
    day3Point: 60,
  },
];

const Leaderboard = () => {
  //   const [users, setUsers] = useState([])
  //   const fetchUserData = () => {
  //     fetch("https://dummyjson.com/products/1")
  //     .then(response => {
  //       return response.json()
  //     })
  //     // .then(data => {
  //     //   setUsers(data)
  //     // })
  //     .then(json => console.log(json))
  //   }

  //   useEffect(() => {
  //     fetchUserData()
  //   }, [])

  return (
    <div className="leaderboard">
      <div className="navigationContainer">
        {/* First section */}
        <div
          className="w-full h-full relative bg-[#190F3E] overflow-hidden"
          style={{ boxShadow: "0px 0px 100px rgba(255,255,255,0.30)" }}
        >
          <LeaderboardTable data={leaderboardData} />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
