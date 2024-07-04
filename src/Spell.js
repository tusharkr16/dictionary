import React, { useState } from 'react';

const customDictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
];

const Spell = () => {
    const [text, setText] = useState('');
    const [suggestion, setSuggestion] = useState('');

    const handleSubmission = () => {
        if (!text.trim()) {
            setSuggestion('');
            return;
        }

        const words = text.split(' ');
        let found = false;

        for (let word of words) {
            const lowerCaseWord = word.toLowerCase();
            const foundWord = customDictionary.find(entry => entry.word.toLowerCase() === lowerCaseWord);
            if (foundWord) {
                setSuggestion(`Definition: ${foundWord.meaning}`);
                found = true;
                break; // Stop searching if a match is found
            }
        }

        if (!found) {
            setSuggestion(`Definition: Word not found`);
        }
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <h1>Dictionary App</h1>
            <input
                type='text'
                value={text}
                onChange={handleChange}
                placeholder="Type something here..."
            />
            <button onClick={handleSubmission}>Submit</button>
            {suggestion && <p>{suggestion}</p>}
        </div>
    );
}

export default Spell;
