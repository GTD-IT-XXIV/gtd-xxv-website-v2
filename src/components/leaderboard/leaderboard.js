import React, { useState } from "react";
import leaderBoardText from "./leaderboard_text.png";
import leftStar from "./star_kiri.png";
import midStar from "./star_tengah.png";
import rightStar from "./star_kanan.png";
import redLine from "./garisnya.png";

const LeaderboardTable = ({ data }) => {
	const [selectedDay, setSelectedDay] = useState("Overall");
	const [filterType, setFilterType] = useState("House");

	// GET HOUSE DATA ONLY
	const houseData = [];

	// NEW SET FOR HOUSES' POINTS
	const houseSet = new Set();
	data.forEach((e) => {
		houseSet.add(e.house);
	});

	[...houseSet].forEach((house) => {
		const currentHouseData = data.filter((e) => {
			return house === e.house;
		});

		const newHouseData = {
			house,
			day1Point: 0,
			day2Point: 0,
			day3Point: 0,
			totalPoint: 0,
		};

		currentHouseData.forEach((e) => {
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
		if (value === "House") {
			setDisplayedData(houseData);
		} else if (value === "OG") {
			setDisplayedData(data);
		}
	};

	// SORT THE DATA DISPLAYED
	displayedData.sort((a, b) => {
		let sortA;
		let sortB;
		if (selectedDay === "Overall") {
			sortA = a.day1Point + a.day2Point + a.day3Point;
			sortB = b.day1Point + b.day2Point + b.day3Point;
		} else if (selectedDay === "Day 1") {
			sortA = a.day1Point;
			sortB = b.day1Point;
		} else if (selectedDay === "Day 2") {
			sortA = a.day2Point;
			sortB = b.day2Point;
		} else if (selectedDay === "Day 3") {
			sortA = a.day3Point;
			sortB = b.day3Point;
		}
		return sortB - sortA;
	});

	return (
		<div className="container-full">
			<div className="container max-w-auto min-h-screen mx-auto py-20">
				{/* <h1 class="text-center text-4xl text-[#FFF2D0] py-2">Leaderboard</h1> */}

				<img
					className="leadeboard_image w-full object-scale-down h-20 relative z-40"
					src={leaderBoardText}
					alt="Leaderboard"
				/>
				<div className="w-auto flex justify-center">
					<img
						className="w-full object-scale-down h-14 mt-[24px] absolute right-[114px] top-32"
						src={leftStar}
						alt="star"
					/>
					<img
						className="w-full object-scale-down h-14 absolute top-32"
						src={midStar}
						alt="star"
					/>
					<img
						className="w-auto object-scale-down h-[58px] mt-[28px] relative bottom-16 left-28"
						src={rightStar}
						alt="star"
					/>
				</div>

				<div className="filter-container flex justify-center relative bottom-20">
					<label className="bg-[#FFF2D0] rounded-full border-[3px] border-[#C13E3E] ring ring-[#FEE794] ring-[3px] pl-8 pr-4 py-0.5 text-[#C13E3E]">
						<label className="mr-14 text-[14px]">Filter by:</label>
						<select
							className="text-[14px] border-[0.5px] border-[#C13E3E] rounded-full py-1 px-4 bg-[#FFF2D0]"
							value={filterType}
							onChange={handleFilterChange}
						>
							<option value="House">House</option>
							<option value="OG">OG</option>
						</select>
					</label>
				</div>
				<img
					className="redLine object-fill justify-center h-20 w-72 m-auto relative bottom-[77px]"
					src={redLine}
					alt="garis"
				/>
				<div className="buttons-container flex justify-center relative bottom-[126px]">
					<button
						className="bg-[#FFF2D0] rounded-full border-2 border-[#C13E3E] border-[2px] ring ring-[#FEE794] ring-[2px] mx-2.5 px-[12px] py-0.5 text-[#C13E3E] text-[12px] hover:drop-shadow-lg"
						onClick={() => setSelectedDay("Overall")}
					>
						Overall
					</button>
					<button
						className="bg-[#FFF2D0] rounded-full border-2 border-[#C13E3E] border-[2px] ring ring-[#FEE794] ring-[2px] mx-2.5 px-3 py-0.5 text-[#C13E3E] text-[12px] hover:drop-shadow-lg"
						onClick={() => setSelectedDay("Day 1")}
					>
						Day 1
					</button>
					<button
						className="bg-[#FFF2D0] rounded-full border-2 border-[#C13E3E] border-[2px] ring ring-[#FEE794] ring-[2px] mx-2.5 px-3 py-0.5 text-[#C13E3E] text-[12px] hover:drop-shadow-lg"
						onClick={() => setSelectedDay("Day 2")}
					>
						Day 2
					</button>
					<button
						className="bg-[#FFF2D0] rounded-full border-2 border-[#C13E3E] border-[2px] ring ring-[#FEE794] ring-[2px] mx-2.5 px-3 py-0.5 text-[#C13E3E] text-[12px] hover:drop-shadow-lg"
						onClick={() => setSelectedDay("Day 3")}
					>
						Day 3
					</button>
				</div>
				<div className="table-container flex items-center justify-center relative bottom-[104px]">
					{/* border-table border-y-[30px] border-x-[20px] border-[#C13E3E] rounded-[30px] ring-[8px] ring-[#FEE794] bg-[#C13E3E] flex-center */}
					<div className="border-table border-y-[30px] border-x-[20px] border-[#C13E3E] rounded-[30px] ring-[8px] ring-[#FEE794] bg-[#C13E3E] flex-center">
						<table className="text-[#474747] text-center text-[14px] border-4 border-[#B17A7A] rounded-[10px] w-auto">
							<thead>
								<tr className="border-b-2 border-[#745E5E]">
									<th className="bg-[#F4F4F4] font-bold px-8 py-1.5 text-[#C13E3E]">
										Rank
									</th>
									<th className="bg-[#F4F4F4] font-bold px-10 py-1.5 text-[#C13E3E]">
										{filterType}
									</th>
									<th className="bg-[#F4F4F4] font-bold px-3 py-1.5 text-[#C13E3E]">
										{
											selectedDay === "Overall"
												? "Total Point"
												: "Total Point" /*: `Day ${selectedDay.slice(-1)} Point` */
										}
									</th>
								</tr>
							</thead>
							<tbody>
									{/* [#F7D7C9] #red	
                                    [#D9EDF6] #blue
                                    [#E2EDBA] #green
                                    [#F4DFF7] #purple */}
									
								{displayedData.map((item, idx) => (
									<tr
										key={`${item.day1Point} ${item.day2Point} ${item.day3Point} ${item.house}`}
                    className={`border-b-2 border-[#D2C2BB] ${["Sadness", "Fear", "Disgust", "Anger"].includes(item.house) ? "house-row": "og-row"}`}
					style={{
						backgroundColor: item.house === "Sadness" ? "#D9EDF6" : item.house === "Anger" ? "#F7D7C9" : item.house === "Disgust" ? "#E2EDBA" : item.house === "Fear" ? "#F4DFF7" : ""
					  }}
									>
										<td className="py-2">{idx + 1}</td>
										<td className="py-2">
											{filterType === "House" ? item.house : item.group}
										</td>
										<td className="py-2">
											{selectedDay === "Overall"
												? item.day1Point + item.day2Point + item.day3Point
												: item[`day${selectedDay.slice(-1)}Point`]}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeaderboardTable;
