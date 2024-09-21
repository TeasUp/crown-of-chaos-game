import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import "./MainPage.css";

function MainPage({
    stats,
    updateStats,
    currentQuestion,
    setCurrentQuestion,
    goToWar,
}) {
    const [question, setQuestion] = useState(questions[0]);

    useEffect(() => {
        setQuestion(questions[currentQuestion - 1] || questions[0]);
    }, [currentQuestion]);

    const handleOptionClick = (option) => {
        const newStats = { ...stats };
        Object.keys(option.consequences).forEach((key) => {
            if (key === "happiness") {
                newStats[key] = `${Math.min(
                    Math.max(
                        parseInt(newStats[key]) + option.consequences[key],
                        0
                    ),
                    100
                )}%`;
            } else {
                newStats[key] += option.consequences[key];
            }
        });
        updateStats(newStats);

        if (currentQuestion % 10 === 0) {
            goToWar();
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    return (
        <div className="main-container">
            <div className="stats-section">
                <h2>King's Stats</h2>
                <table className="stats-table">
                    <tbody>
                        <tr>
                            <td>Wealth:</td>
                            <td>${stats.wealth}</td>
                        </tr>
                        <tr>
                            <td>Food:</td>
                            <td>{stats.food} breads</td>
                        </tr>
                        <tr>
                            <td>People:</td>
                            <td>{stats.people}</td>
                        </tr>
                        <tr>
                            <td>Happiness:</td>
                            <td>{stats.happiness}</td>
                        </tr>
                        <tr>
                            <td>Relations with Other Kingdoms:</td>
                            <td>{stats.relations}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="game-section">
                <div className="scroll">
                    <p>{question.title}</p>
                </div>
                <div className="options">
                    {question.options.map((option) => (
                        <button
                            key={option.text}
                            className="option"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainPage;
