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
            setSuggestion('Word not found in the dictionary.');
            return;
        }

        const lowerCaseText = text.toLowerCase();
        const foundWord = customDictionary.find(entry => entry.word.toLowerCase() === lowerCaseText);

        if (foundWord) {
            setSuggestion(` ${foundWord.meaning}`);
        } else {
            setSuggestion('Word not found in the dictionary.');
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
            <h3>Definition :</h3>
            <p> {suggestion}</p>
        </div>
    );
}

export default Spell;
