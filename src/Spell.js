import React, { useState, useEffect } from 'react';

const customDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
];

const Spell = () => {
    const [text, setText] = useState('');
    const [suggestion, setSuggestion] = useState('');

    useEffect(() => {
        const words = text.split(' ');
        for (let word of words) {
            const lowerCaseWord = word.toLowerCase();
            const foundWord = customDictionary.find(entry => entry.word.toLowerCase() === lowerCaseWord);
            if (foundWord) {
                setSuggestion(`Definition: ${foundWord.meaning}`);
                return;
            } else {
                setSuggestion(`Definition: Word doesn't found`);
            }
        }
        setSuggestion('');
    }, [text]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <h1>Dictionary App</h1>
            <textarea
                value={text}
                onChange={handleChange}
                placeholder="Type something here..."
            />
            {suggestion && <p>{suggestion}</p>}
        </div>
    );
}

export default Spell;
