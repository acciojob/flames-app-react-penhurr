import React, { Component, useState } from "react";
import '../styles/App.css';

const App = () => {

    let [name1, setName1] = useState('')
    let [name2, setName2] = useState('')
    let [answer, setAnswer] = useState('')

    function clear(){
        setName1('')
        setName2('')
        setAnswer('')
    }

    function calculate(name1, name2) {
        if (name1.length === 0 || name2.length === 0) {
            answer = "Please Enter valid input"
        } else {
            let map1 = new Map()
            let map2 = new Map()
            let len = 0
        
            for (let c of name1) {
                map1.set(c, (map1.get(c) || 0) + 1)
            }
            for (let c of name2) {
                map2.set(c, (map2.get(c) || 0) + 1)
            }
            for (let [char, count] of map1) {
                if (map2.has(char)) {
                    len += Math.abs(count - map2.get(char))
                    map1.delete(char)
                    map2.delete(char)
                }
            }
            for (let [char, count] of map1) {
                len += count
            }
            for (let [char, count] of map2) {
                len += count
            }
            switch (len) {
                case 0: setAnswer("Siblings")

                    break;
                case 1: setAnswer("Friends")

                    break;
                case 2: setAnswer("Love")

                    break;
                case 3: setAnswer("Affection")

                    break;
                case 4: setAnswer("Marriage")

                    break;
                case 5: setAnswer("Enemey")

                    break;

            }
        }


    }

    return (
        <div id="main">
            {/* Do not remove the main div */}
            <input type="text" data-testid="input1" name="name1" placeholder="Enter first name" value={name1} onChange={e => setName1(e.target.value)} />
            <input type="text" data-testid="input2" name="name2" placeholder="Enter second name" value={name2} onChange={e => setName2(e.target.value)} />
            <button type="button" data-testid="calculate_relationship" onClick={() => calculate(name1, name2)} >Calculator Relationship Future</button>
            <button type="reset" data-testid="clear" name="clear" onClick={clear}>Clear</button>

            <h3 data-testid="answer">{answer}</h3>

        </div>
    )

}


export default App;
