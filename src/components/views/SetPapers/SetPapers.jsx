import {useState} from "react";
import PaperInputList from "../../shared/PaperInputList/PaperInputList";

const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const removeEmptyEntries = (array) => {
    return array.filter(item => item.value)
}

const SetPapers = ({onStartGame}) => {
    const [paperList, setPaperList] = useState([])
    const handleNextPlayer = (charadesToAdd) => {
        setPaperList(prev => {
            return [...prev, ...charadesToAdd]
        })
    }

    const handleStartGame = (charadesToAdd) => {
        const cleanHatItems = removeEmptyEntries([...paperList, ...charadesToAdd]);
        const shuffleHatItems = shuffle(cleanHatItems);
        onStartGame(shuffleHatItems)
    }

    return <div>
        <h1>✏️Write your papers</h1>
        <PaperInputList key={paperList.length} onNexPlayer={handleNextPlayer}
                        onStartGame={handleStartGame}/>
    </div>

}

export default SetPapers;