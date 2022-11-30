import empty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'
import { useState } from 'react'
import './Dice.css'

function num(number) {
    switch (number) {
        case 1:
            return dice1
        case 2:
            return dice2
        case 3:
            return dice3
        case 4:
            return dice4
        case 5:
            return dice5
        case 6:
            return dice6

        default:
            return empty
    }

}
function random(min = 1, max = 6) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function Dice() {
    let [dice, value] = useState(random())
    let [waiting, Waiting] = useState(false)
    function handleClick() {
        if (waiting) return
        value(0);
        Waiting(true)
        setTimeout(() => {
            value(random())
            Waiting(false)
        }, 1000)
    }
    return (
        <div className="dice">
            <img src={num(dice)} alt={'dice ' + dice} onClick={handleClick} />
        </div>
    )
}
export default Dice