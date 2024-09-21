import React, { useState } from "react";
import "./WarPage.css";

function WarPage({ stats, updateStats, currentQuestion, returnToMain }) {
    const [warEffort, setWarEffort] = useState({
        wealth: 0,
        food: 0,
        people: 0,
    });

    const handleRangeChange = (e) => {
        const { name, value } = e.target;
        setWarEffort((prev) => ({ ...prev, [name]: parseInt(value) }));
    };

    const goToWar = () => {
        const warDifficulty = (Math.random() * (currentQuestion * 20)) + (currentQuestion % 10);
        const totalEffort = Object.values(warEffort).reduce(
            (sum, val) => sum + val,
            0
        );
        const result = totalEffort >= warDifficulty ? "win" : "lose";

        let newStats = { ...stats };
        if (result === "win") {
            const reward = Math.floor(totalEffort * 0.3);
            Object.keys(warEffort).forEach((key) => {
                newStats[key] =
                    stats[key] -
                    Math.floor(warEffort[key] / 2) +
                    (key !== "people" ? reward : 0);
            });
            alert(
                `Victory! You won the war, lost 50% of the resources spent, and gained ${reward} wealth and food as a reward.`
            );
        } else {
            Object.keys(warEffort).forEach((key) => {
                newStats[key] = stats[key] - warEffort[key];
            });
            alert(
                "Defeat! You lost the war and all the resources you committed."
            );
        }

        updateStats(newStats);
        returnToMain();
    };

    return (
        <div className="war-page">
            <div className="stats-section">
                <h2>Your Stats</h2>
                <p>Wealth: ${stats.wealth}</p>
                <p>Food: {stats.food} breads</p>
                <p>People: {stats.people}</p>
            </div>

            <div className="war-effort-section">
                <h2>Prepare for War</h2>
                <div className="input-group">
                    <label>Wealth to spend:</label>
                    <input
                        type="range"
                        name="wealth"
                        min="0"
                        max={stats.wealth}
                        value={warEffort.wealth}
                        onChange={handleRangeChange}
                    />
                    <span>{warEffort.wealth}</span>
                </div>
                <div className="input-group">
                    <label>Food to spend:</label>
                    <input
                        type="range"
                        name="food"
                        min="0"
                        max={stats.food}
                        value={warEffort.food}
                        onChange={handleRangeChange}
                    />
                    <span>{warEffort.food}</span>
                </div>
                <div className="input-group">
                    <label>People to send:</label>
                    <input
                        type="range"
                        name="people"
                        min="0"
                        max={stats.people}
                        value={warEffort.people}
                        onChange={handleRangeChange}
                    />
                    <span>{warEffort.people}</span>
                </div>

                <button onClick={goToWar}>GO TO WAR</button>
            </div>
        </div>
    );
}

export default WarPage;
