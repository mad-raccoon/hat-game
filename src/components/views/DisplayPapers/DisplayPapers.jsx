import {Button, Paper} from "@mui/material";
import {useState} from "react";
import './DisplayPapers.css'
import BottomControls from "../../shared/BottomControls/BottomControls";

const dummyHat = [
    {
        "value": "do a flip ",
        "target": "solo"
    },
    {
        "value": "sing karaoke",
        "target": "solo"
    },
    {
        "value": "dance",
        "target": "group"
    },
    {
        "value": "tell a joke",
        "target": "solo"
    },
    {
        "value": "order a piza",
        "target": "solo"
    }
]
const DisplayPapers = ({hatItems = dummyHat, onGameEnd}) => {
    const [paperNumber, setPaperNumber] = useState(0);
    const paper = hatItems[paperNumber];

    const handleEndGame = () => {
        // eslint-disable-next-line no-restricted-globals
        const accept = confirm('You really sure you want to end the game?');

        if (accept) {
            onGameEnd();
        }
    }


    if (paperNumber > hatItems.length - 1) {
        return <div>Game end
            <BottomControls>
                <Button variant={'contained'} size={'large'} color={'error'} onClick={onGameEnd}>Restart</Button>
            </BottomControls>
        </div>
    }


    return <div>
        <h1>👒 {paper.target.toUpperCase()} challenge</h1>
        <div className="paper">

            <Paper elevation={3} className='paper_container'>
                <h1>{paper.value}</h1>
            </Paper>
            <BottomControls>
                <Button variant={"outlined"} size={'large'}
                        onClick={() => setPaperNumber(prev => prev + 1)}>Next</Button>
                <Button variant={'contained'} size={'large'} color={'error'} onClick={handleEndGame}>End game</Button>
            </BottomControls>
        </div>
    </div>
}

export default DisplayPapers;