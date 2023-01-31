import './App.css';
import SetPapers from "./components/views/SetPapers/SetPapers";
import {useState} from "react";
import DisplayPapers from "./components/views/DisplayPapers/DisplayPapers";

// App states
// Set charades
// Display charades

const App = () => {
    const [currentView, setCurrentView] = useState('set')
    const [hatItems, setHatItems] = useState([])

    const handleGameStart = (hatItemsToAdd) => {
        setHatItems(hatItemsToAdd);
        setCurrentView('display')
    }

    const handleGameEnd =() => {
        setHatItems([]);
        setCurrentView('set')
    }

    return (
        <div className='display_container'>
            {currentView === 'set' &&
                <SetPapers onStartGame={handleGameStart}/>
            }
            {currentView === 'display' &&
                <DisplayPapers hatItems={hatItems} onGameEnd={handleGameEnd}/>
            }
        </div>
    );
}

export default App;
