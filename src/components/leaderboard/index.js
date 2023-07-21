import './leaderboard.css';
import LeaderboardTable from './leaderboard';
import { useState, useEffect } from 'react';
import axios from 'axios';

const houseMapping = {
  1: 'Sadness',
  2: 'Fear',
  3: 'Disgust',
  4: 'Anger',
};

const groupMapping = {
  1: 'Indiana JONES',
  2: 'LARA Croft',
  3: 'FEARaun',
  4: 'FEARamid',
  5: 'GOTbusters',
  6: 'TRASHformers',
  7: 'seriGALAK',
  8: 'capyMARAH',
};

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [houseData, setHouseData] = useState([]);

  const mapData = data => {
    const newData = [];
    for (const row of data) {
      const { og, house, ...points } = row;
      const newRow = { ...points, group: groupMapping[og], house: houseMapping[house] };
      newData.push(newRow);
    }
    return newData;
  };

  const getHouseData = data => {
    const houseData = [];
    ['Sadness', 'Fear', 'Disgust', 'Anger'].forEach(house => {
      const currentHouseData = data.filter(d => {
        return house === d.house;
      });
      const newHouseData = {
        house,
        day1Points: 0,
        day2Points: 0,
        day3Points: 0,
        totalPoints: 0,
      };
      currentHouseData.forEach(d => {
        newHouseData.day1Points += d.day1Points;
        newHouseData.day2Points += d.day2Points;
        newHouseData.day3Points += d.day3Points;
        newHouseData.totalPoints += d.totalPoints;
      });
      houseData.push(newHouseData);
    });
    return houseData;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get('https://gtd-service.pintugtd.com/api/leaderboard');
        const mappedData = mapData(data.data.data);
        const houseData = getHouseData(mappedData);
        setLeaderboardData(mappedData);
        setHouseData(houseData);
      } catch (e) {
        console.log('Failed to get data:', e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="leaderboard">
      <div className="navigationContainer">
        <div
          className="w-full h-full relative bg-[#190F3E] overflow-hidden"
          style={{ boxShadow: '0px 0px 100px rgba(255,255,255,0.30)' }}
        >
          {leaderboardData.length ? (
            <LeaderboardTable ogData={leaderboardData} houseData={houseData} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
