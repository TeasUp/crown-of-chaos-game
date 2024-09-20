import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import "./MainPage.css";

const MainPage = () => {
    const [stats, setStats] = useState({
        wealth: 1000,
        food: 200,
        people: 100,
        happiness: "60%",
        relations: "medium",
    });
    const [currentQuestion, setCurrentQuestion] = useState(
        Math.round(Math.random() * questions.length)
    );
    const [question, setQuestion] = useState(questions[0]);

    useEffect(() => {
        setQuestion(questions[currentQuestion] || questions[0]); // Reset to first question if out of bounds
    }, [currentQuestion]);

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const handleOptionClick = (option) => {
        setStats((prevStats) => {
            const newStats = { ...prevStats };
            Object.keys(option.consequences).forEach((key) => {
                newStats[key] += option.consequences[key];
            });
            newStats.happiness = `${clamp(
                parseInt(newStats.happiness) +
                    (option.consequences.happiness || 0),
                0,
                100
            )}%`;
            return newStats;
        });

        // Move to the next question or loop back to the first question
        setCurrentQuestion((prev) =>
            prev + 1 < questions.length ? prev + 1 : 0
        );
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
};

export default MainPage;
