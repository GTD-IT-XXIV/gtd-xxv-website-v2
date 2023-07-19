import { useState, useEffect } from "react";

const Tab = ({idx, label, activeTab, setActiveTab}) => {
    const [imageIdx, setImageIdx] = useState(idx);
    const zindex = (activeTab >= idx ? 5 + idx : 5 - idx);
    
    useEffect(() => {
        let newImageIdx;
        if (idx === activeTab) {
            newImageIdx = 0;
        } else if (idx < activeTab) {
            newImageIdx = idx + 1;
        } else {
            newImageIdx = idx;
        }
        setImageIdx(newImageIdx);
    }, [activeTab, idx]);
    
    const handleClick = () => {
        setActiveTab(idx);
    }

    return (
        <div className="tab relative justify-center text-center cursor-pointer" style={{zIndex: zindex}} onClick={handleClick}>
            <div classname="tab-image" style={{ backgroundImage: `url(${require(`./img/tab_${imageIdx}.png`)})`,
                                                backgroundSize: 'cover', 
                                                position: 'absolute', 
                                                right: "-4vw", top: 0, bottom: 0, left: 0 }}/>
            <div classname="tab-label" style={{position: 'relative'}}> {label} </div>
        </div>
    )
}

export default Tab;