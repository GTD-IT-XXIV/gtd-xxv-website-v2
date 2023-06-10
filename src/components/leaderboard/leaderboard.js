import React, { useState } from 'react';

const LeaderboardTable = ({ data }) => {
  const [selectedDay, setSelectedDay] = useState('Overall');
  const [filterType, setFilterType] = useState('House');

  // GET HOUSE DATA ONLY
  const houseData = [];

  // NEW SET FOR HOUSES' POINTS
  const houseSet = new Set();
  data.forEach(e => {
    houseSet.add(e.house);
  });
  
  ([ ...houseSet ]).forEach((house) => {
    const currentHouseData = data.filter(e => {
      return house === e.house;
    });
    
    const newHouseData = {
      house,
      day1Point: 0, 
      day2Point: 0, 
      day3Point: 0, 
      totalPoint: 0
    };

    currentHouseData.forEach(e => {
      newHouseData.day1Point += e.day1Point;
      newHouseData.day2Point += e.day2Point;
      newHouseData.day3Point += e.day3Point;
    });
      
    houseData.push(newHouseData);

  });

  // HOUSEDATA AS ORIGINAL STATE
  const [displayedData, setDisplayedData] = useState(houseData);

  // FILTERTYPE CHANGE HOUSE/OG
  const handleFilterChange = ({ target: { value } }) => {
    setFilterType(value);
    if (value === 'House') {
      setDisplayedData(houseData);
    } 
    else if (value === 'OG') {
      setDisplayedData(data);
    }
  };

  // SORT THE DATA DISPLAYED
  displayedData.sort((a,b) => {
    let sortA;
    let sortB;
    if (selectedDay === 'Overall') {
      sortA = a.day1Point + a.day2Point + a.day3Point;
      sortB = b.day1Point + b.day2Point + b.day3Point;
    } else if (selectedDay === 'Day 1') {
      sortA = a.day1Point;
      sortB = b.day1Point;
    } else if (selectedDay === 'Day 2') {
      sortA = a.day2Point;
      sortB = b.day2Point;
    } else if (selectedDay === 'Day 3') {
      sortA = a.day3Point;
      sortB = b.day3Point;
    }
    return sortB - sortA;
  });


  return (
    <div className="container max-w-800 mx-auto p-20">
      <h1 class="text-center text-5xl text-[#FFF2D0] py-2">Leaderboard</h1>
      <div className="filter-container flex justify-center mb-20">
        <label class="bg-[#FFF2D0] rounded-full border-4 border-[#C13E3E] ring ring-[#FEE794] px-6 py-1 text-[#C13E3E]">
          <label class="pr-8 pl-4">Filter by:</label>
          <select class="border-[1px] border-[#C13E3E] rounded-full py-1 px-4 bg-[#FFF2D0]" value={filterType} onChange={handleFilterChange}>
            <option value="House">House</option>
            <option value="OG">OG</option>
          </select>
        </label>
      </div>
      <div className="buttons-container flex justify-center mb-20">
        <button class="bg-[#FFF2D0] rounded-full border-4 border-[#C13E3E] ring ring-[#FEE794] mx-1 px-6 py-1.5 text-[#C13E3E] hover:drop-shadow-lg" onClick={() => setSelectedDay('Overall')}>Overall</button>
        <button class="bg-[#FFF2D0] rounded-full border-4 border-[#C13E3E] ring ring-[#FEE794] mx-1 px-6 py-1.5 text-[#C13E3E] hover:drop-shadow-lg" onClick={() => setSelectedDay('Day 1')}>Day 1</button>
        <button class="bg-[#FFF2D0] rounded-full border-4 border-[#C13E3E] ring ring-[#FEE794] mx-1 px-6 py-1.5 text-[#C13E3E] hover:drop-shadow-lg" onClick={() => setSelectedDay('Day 2')}>Day 2</button>
        <button class="bg-[#FFF2D0] rounded-full border-4 border-[#C13E3E] ring ring-[#FEE794] mx-1 px-6 py-1.5 text-[#C13E3E] hover:drop-shadow-lg" onClick={() => setSelectedDay('Day 3')}>Day 3</button>
      </div>
      <table class="w-full table-fixed text-[#474747] text-center">
        <thead>
          <tr class="border-b-2 border-[#745E5E]">
            <th class= "bg-[#F4F4F4] font-bold p-10 text-[#C13E3E]">Rank</th>
            <th class="bg-[#F4F4F4] font-bold p-10 text-[#C13E3E]">{filterType}</th>
            <th class="bg-[#F4F4F4] font-bold p-10 text-[#C13E3E]">{selectedDay === 'Overall' ? 'Total Point' : 'Total Point' /*: `Day ${selectedDay.slice(-1)} Point` */ }</th>
          </tr>
        </thead>
        <tbody class="[&>*:nth-child(1)]:bg-[#F7D7C9]
                      [&>*:nth-child(2)]:bg-[#D9EDF6]
                      [&>*:nth-child(3)]:bg-[#F7D7C9]
                      [&>*:nth-child(4)]:bg-[#E2EDBA]
                      [&>*:nth-child(5)]:bg-[#D9EDF6]
                      [&>*:nth-child(6)]:bg-[#F4DFF7]
                      [&>*:nth-child(7)]:bg-[#E2EDBA]
                      [&>*:nth-child(8)]:bg-[#F4DFF7]">
          {displayedData.map((item, idx) => (
            <tr class="border-b-2 border-[#D2C2BB]"
              key={`${item.day1Point} ${item.day2Point} ${item.day3Point} ${item.house}`}
              className={['House A', 'House B', 'House C', 'House D'].includes(item.house) ? 'house-row' : 'og-row'}
            >
              <td class="p-10">{idx+1}</td>
              <td class="p-10">{filterType === 'House' ? item.house : item.group}</td>
              <td class="p-10">{selectedDay === 'Overall' ? (item.day1Point + item.day2Point + item.day3Point) : item[`day${selectedDay.slice(-1)}Point`]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
