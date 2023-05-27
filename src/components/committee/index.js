import { useState } from "react";
import Polaroid from "./Polaroid.js";
import Card from "./Card.js";
import 'tailwindcss/tailwind.css';
import "./committee.css";

const Committee = () => {
	const [cardState, setCardState] = useState({
		visible: false,
		image: "",
		name: "",
		year: "",
		major: "",
		quote: "",
	});

	return (
		<div className="committee">
			<Card cardState={cardState} setCardState={setCardState}/>
			
			<div className="navigationContainer" style={{fontFamily: "InsideOut", color:"white", marginTop:"5rem", marginBottom:"3rem"}}>
				<p className="title" style={{ fontSize: "50px"}}> Our committee </p>
				<div className="tops"> 
					<p style={{fontSize: "40px"}}> Tops </p>
					<div className="grid grid-cols-2 gap-4 p-3">
						<Polaroid
							image="sample_pic.png"
							name="Joshua AC"
							year="1"
							major="Data Science"
							quote="I love AI"
							setCardState={setCardState}
						/>
						<Polaroid
							image="sample_pic.png"
							name="Joshua James"
							year="1"
							major="EEE"
							quote="I love CSS"
							setCardState={setCardState}
						/>
						<Polaroid
							image="sample_pic.png"
							name="Clayton Fernalo"
							year="1"
							major="Computer Science"
							quote="I love Nyemak"
							setCardState={setCardState}
						/>
					</div>
				</div>
				<div className="non-tops"> 
					<div className="main-comm"> 
						<p style={{ fontSize: "40px"}}> Main committee </p>
						<div className="grid grid-cols-2 gap-4 p-3">
							<Polaroid
								image="sample_pic.png"
								name="Joshua AC"
								year="1"
								major="Computer Science"
								quote="I love AI"
								setCardState={setCardState}
							/>
						</div>
					</div>
					<div className="sub-comm"> 
						<p style={{ fontSize: "40px"}}> Sub committee </p>
						<div className="grid grid-cols-2 gap-4 p-3">
							<Polaroid
								image="sample_pic.png"
								name="Joshua AC"
								year="1"
								major="Computer Science"
								quote="I love AI"
								setCardState={setCardState}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Committee;
