import PaperInput from "../PaperInput/PaperInput";
import {useState} from "react";
import './PaperInputList.css'
import {Button} from "@mui/material";

const defaultCharade = {value: '', target: 'solo'}

const PaperInputList = ({onStartGame, onNexPlayer}) => {

    const [paperList, setPaperList] = useState(Array(6).fill(defaultCharade))

    const handleCharadeChange = (id, value) => {
        const newPaperList = paperList
        newPaperList[id] = value;
        setPaperList(newPaperList)
    }

    const handleNextPlayer = () => {
        onNexPlayer(paperList)
    }

    const handleStartGame = () => {
        // eslint-disable-next-line no-restricted-globals
        const accept = confirm('You really want to start the game?');

        if (accept) {
            onStartGame(paperList);

        }
    }

    return <div>
        <div className='list'>
            {[0, 1, 2, 3, 4, 5].map((id) => <PaperInput key={id}
                                                        onChange={(value) => handleCharadeChange(id, value)}/>)}
        </div>
        <div className='actions'>
            <Button variant="outlined" color="warning" size='large' onClick={handleNextPlayer}>Next player</Button>
            <Button variant="contained" color="success" size='large' onClick={handleStartGame}>Start game</Button>
        </div>
    </div>
}

export default PaperInputList