import { useEffect } from 'react'
import MoleHill from './molehill.png'

function EmptySlot(props) {
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '25vw'}}
            src={MoleHill}
            alt={'mole hill'} />
        </div>
    )
}

export default EmptySlot