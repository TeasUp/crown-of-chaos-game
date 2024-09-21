import React, { useState } from "react";
import MainPage from "./Main page/MainPage";
import WarPage from "./War Page/WarPage";

function App() {
    const [page, setPage] = useState("main");
    const [stats, setStats] = useState({
        wealth: 600,
        food: 120,
        people: 100,
        happiness: "50%",
        relations: "medium",
    });
    const [currentQuestion, setCurrentQuestion] = useState(1);

    const goToWar = () => setPage("war");
    const returnToMain = () => setPage("main");

    const updateStats = (newStats) => setStats(newStats);

    return (
        <div className="app-container">
            {page === "main" ? (
                <MainPage
                    stats={stats}
                    updateStats={updateStats}
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    goToWar={goToWar}
                />
            ) : (
                <WarPage
                    stats={stats}
                    updateStats={updateStats}
                    currentQuestion={currentQuestion}
                    returnToMain={returnToMain}
                />
            )}
        </div>
    );
}

export default App;
