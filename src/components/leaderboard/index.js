import "./leaderboard.css";
import LeaderboardTable from './leaderboard';

// Sample data for leaderboard
const leaderboardData = [
  { group: 'OG1', house: 'House A', day1Point: 50, day2Point: 60, day3Point: 70 },
  { group: 'OG2', house: 'House A', day1Point: 40, day2Point: 50, day3Point: 60 },
  { group: 'OG3', house: 'House B', day1Point: 30, day2Point: 40, day3Point: 50 },
  { group: 'OG4', house: 'House B', day1Point: 20, day2Point: 30, day3Point: 40},
  { group: 'OG5', house: 'House C', day1Point: 10, day2Point: 20, day3Point: 30},
  { group: 'OG6', house: 'House C', day1Point: 20, day2Point: 30, day3Point: 40},
  { group: 'OG7', house: 'House D', day1Point: 30, day2Point: 40, day3Point: 50 },
  { group: 'OG8', house: 'House D', day1Point: 40, day2Point: 50, day3Point: 60 },
];

const Leaderboard = () => {
  return (
    <div className="faq">
      <div className="navigationContainer">
        <div className="App">
          <LeaderboardTable data={leaderboardData} />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
