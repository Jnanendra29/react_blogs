import { useState } from "react";

const Home = () => {
    // let name='anin'
    const [name, setName] = useState('anindita')
    const [age, setAge] = useState(21)

    const handleClick = (e) => {
        setName('anin')
        setAge(22)
        // console.log('hello anin', e)
    }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target)
    // }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => handleClickAgain('anindita', e)}>Click me Again</button> */}
        </div>
    );
}

export default Home;
