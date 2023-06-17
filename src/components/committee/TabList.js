import Tab from './Tab.js';

const TabList = ({activeTab, setActiveTab}) => {
    return (
        <div className="tabs grid grid-cols-5" 
            style={{textAlign: 'center', 
                    lineHeight:'4vw', 
                    fontSize: '2.7vw', 
                    height: '4vw', 
                    width: '70vw',
                    color: '#38255E' }}>
            <Tab
                idx={0}
                label="POLOG"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <Tab
                idx={1}
                label="PPIT"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <Tab
                idx={2}
                label="BFM"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <Tab
                idx={3}
                label="WELFARE"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <Tab
                idx={4}
                label="GL"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </div>
    );
}

export default TabList;