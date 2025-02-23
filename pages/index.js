import React, { useState } from 'react';
import * as Switch from '@radix-ui/react-switch';

// Results Display Component
const ResultsDisplay = ({ results }) => {
  const gamesPlayed = results.wins + results.losses; // Don't count early reveals in total
  const winRate = gamesPlayed > 0 ? ((results.wins / gamesPlayed) * 100).toFixed(1) : '0.0';
  
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-green-600">{results.wins}</div>
        <div className="text-sm text-black">Wins</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-red-600">{results.losses}</div>
        <div className="text-sm text-black">Losses</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-blue-600">{results.earlyReveals}</div>
        <div className="text-sm text-black">Monty revealed the car</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-purple-600">{winRate}%</div>
        <div className="text-sm text-black">Win Rate</div>
      </div>
    </div>
  );
};

// Interactive Game Component
const InteractiveGame = ({ isClassicVersion, onGameComplete }) => {
  const [gameState, setGameState] = useState('initial');
  const [doors, setDoors] = useState(['A', 'B', 'C']);
  const [carPosition, setCarPosition] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [revealedDoor, setRevealedDoor] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const [finalChoice, setFinalChoice] = useState(null);

  const resetGame = () => {
    const newCarPosition = doors[Math.floor(Math.random() * doors.length)];
    setGameState('initial');
    setCarPosition(newCarPosition);
    setPlayerChoice(null);
    setRevealedDoor(null);
    setGameResult(null);
    setFinalChoice(null);
  };

  React.useEffect(() => {
    resetGame();
  }, [isClassicVersion]);

  const handleInitialChoice = (door) => {
    setPlayerChoice(door);
    const unopenedDoors = doors.filter(d => d !== door);
    
    let doorToReveal;
    if (isClassicVersion) {
      doorToReveal = unopenedDoors.find(d => d !== carPosition) || unopenedDoors[0];
    } else {
      doorToReveal = unopenedDoors[Math.floor(Math.random() * unopenedDoors.length)];
    }
    
    setRevealedDoor(doorToReveal);
    
    if (!isClassicVersion && doorToReveal === carPosition) {
      setGameResult('revealed');
      setGameState('final');
      onGameComplete('early_reveal');
    } else {
      setGameState('revealed');
    }
  };

  const handleFinalChoice = (door) => {
    setFinalChoice(door);
    const result = door === carPosition ? 'win' : 'lose';
    setGameResult(result);
    setGameState('final');
    onGameComplete(result);
  };

  const getDoorStyle = (door) => {
    const baseStyle = "flex flex-col items-center justify-center w-24 h-32 rounded-lg border-2 transition-all duration-200";
    
    if (gameState === 'initial') {
      return `${baseStyle} hover:border-blue-500 hover:bg-blue-50`;
    }
    
    if (gameState === 'revealed') {
      if (door === revealedDoor) {
        return `${baseStyle} border-gray-300 bg-gray-100`;
      }
      if (door === playerChoice) {
        return `${baseStyle} border-blue-500 bg-blue-50 hover:border-blue-700 hover:bg-blue-100`;
      }
      return `${baseStyle} hover:border-green-500 hover:bg-green-50`;
    }
    
    return `${baseStyle} border-gray-300 bg-gray-100`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="space-y-6">
        <div className="flex justify-center gap-4">
          {doors.map((door) => {
            // Default closed door appearance
            const closedDoor = (
              <div className="w-8 h-12 border-4 border-gray-600 rounded-t-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-600 rounded-full -ml-1"></div>
              </div>
            );

            let content = closedDoor;
            
            // Early reveal - only show Monty's door with car
            if (gameResult === 'revealed' && door === revealedDoor) {
              content = <div className="text-4xl">🚗</div>;
            }
            // During regular play - only show Monty's reveal
            else if (gameState === 'revealed' && door === revealedDoor) {
              content = <div className="text-4xl">🐐</div>;
            }
            // At game end - show only Monty's reveal and final choice
            else if (gameState === 'final' && gameResult !== 'revealed' && 
                    (door === revealedDoor || door === finalChoice)) {
              content = door === carPosition ? 
                <div className="text-4xl">🚗</div> : 
                <div className="text-4xl">🐐</div>;
            }

            return (
              <button
                key={door}
                className={getDoorStyle(door)}
                onClick={() => {
                  if (gameState === 'initial') handleInitialChoice(door);
                  else if (gameState === 'revealed' && door !== revealedDoor) handleFinalChoice(door);
                }}
                disabled={gameState === 'final' || (gameState === 'revealed' && door === revealedDoor)}
              >
                {content}
                <span className="mt-2">Door {door}</span>
              </button>
            );
          })}
        </div>
        
        <div className="text-center space-y-4">
          {gameState === 'initial' && (
            <p className="text-lg">Choose a door!</p>
          )}
          
          {gameState === 'revealed' && gameResult !== 'revealed' && (
            <p className="text-lg">
              Door {revealedDoor} has a goat! Would you like to stick with Door {playerChoice} or switch to Door {doors.find(d => d !== playerChoice && d !== revealedDoor)}?
            </p>
          )}
          
          {gameState === 'final' && (
            <>
              <p className="text-xl font-bold">
                {gameResult === 'win' && "Congratulations! You found the car! 🎉"}
                {gameResult === 'lose' && "Sorry! You found a goat! 🐐"}
                {gameResult === 'revealed' && "Monty revealed the car! Game Over! 🚗"}
              </p>
              <button 
                onClick={resetGame}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Play Again
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Component
const MontyHallSimulator = () => {
  const [isClassicVersion, setIsClassicVersion] = useState(true);
  const [results, setResults] = useState({ wins: 0, losses: 0, earlyReveals: 0 });
  const [numGames, setNumGames] = useState(1000);
  const [strategy, setStrategy] = useState('always_switch');

  React.useEffect(() => {
    setResults({ wins: 0, losses: 0, earlyReveals: 0 });
  }, [isClassicVersion]);

  const runGame = (strategy, isClassic) => {
    const doors = ['A', 'B', 'C'];
    const carPosition = doors[Math.floor(Math.random() * doors.length)];
    const initialChoice = doors[Math.floor(Math.random() * doors.length)];
    
    const unopenedDoors = doors.filter(door => door !== initialChoice);
    
    let revealedDoor;
    if (isClassic) {
      revealedDoor = unopenedDoors.find(door => door !== carPosition) || unopenedDoors[0];
    } else {
      revealedDoor = unopenedDoors[Math.floor(Math.random() * unopenedDoors.length)];
    }
    
    if (!isClassic && revealedDoor === carPosition) {
      return 'early_reveal';
    }
    
    const remainingDoor = doors.find(door => door !== initialChoice && door !== revealedDoor);
    
    let finalChoice;
    switch (strategy) {
      case 'always_switch':
        finalChoice = remainingDoor;
        break;
      case 'always_stay':
        finalChoice = initialChoice;
        break;
      case 'random':
        finalChoice = Math.random() < 0.5 ? initialChoice : remainingDoor;
        break;
      default:
        finalChoice = initialChoice;
    }
    
    return finalChoice === carPosition ? 'win' : 'loss';
  };

  const runSimulation = () => {
    const simulationResults = {
      wins: 0,
      losses: 0,
      earlyReveals: 0
    };
    
    for (let i = 0; i < numGames; i++) {
      const outcome = runGame(strategy, isClassicVersion);
      if (outcome === 'win') simulationResults.wins++;
      else if (outcome === 'loss') simulationResults.losses++;
      else simulationResults.earlyReveals++;
    }
    
    setResults(simulationResults);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto space-y-6 px-4">
        {/* Title and Description */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold text-center">Does Monty Know?</h2>
            
            <div className="text-center max-w-2xl space-y-4">
              <p>
                In the <a href="https://en.wikipedia.org/wiki/Monty_Hall_problem" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Monty Hall Problem</a>, a contestant
                is shown three doors, with a car behind one and a goat behind the other two. The contestant chooses a door, and the host, who knows where the car is, opens a different door to reveal a goat. The  
                contestant can then stick with their original choice, or switch to the remaining unopened door.
              </p>
              <p>
                Surprisingly, it's better to switch than to stick with your original choice. However, if the host <em>doesn't know</em> where the car is, and opens a door at random, there's no benefit to switching - <em>even if he revealed a goat!</em> Don't 
                believe it? Try it for yourself!
              </p>
              <p><a href="/explanation" className="text-blue-600 font-bold hover:underline">What's going on?</a>
              </p>
            </div>

            <div className="flex items-center justify-center space-x-4 text-lg">
              <span className={!isClassicVersion ? 'text-gray-400' : ''}>Monty Knows</span>
              <Switch.Root
                checked={!isClassicVersion}
                onCheckedChange={(checked) => setIsClassicVersion(!checked)}
                className="w-11 h-6 bg-gray-200 rounded-full relative data-[state=checked]:bg-blue-500"
              >
                <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
              </Switch.Root>
              <span className={isClassicVersion ? 'text-gray-400' : ''}>Monty Doesn't Know</span>
            </div>
            <p className="text-center text-black">
              {isClassicVersion 
                ? "In this version, Monty always reveals a goat behind one of the doors you didn't choose." 
                : "In this version, Monty randomly reveals one of the doors you didn't choose - it might be the car!"}
            </p>
          </div>
        </div>

        {/* Game Area */}
        <InteractiveGame 
          isClassicVersion={isClassicVersion} 
          onGameComplete={(result) => {
            setResults(prev => ({
              ...prev,
              wins: prev.wins + (result === 'win' ? 1 : 0),
              losses: prev.losses + (result === 'lose' ? 1 : 0),
              earlyReveals: prev.earlyReveals + (result === 'early_reveal' ? 1 : 0)
            }));
          }}
        />

        {/* Results */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h3 className="text-lg font-semibold p-4 border-b">Results</h3>
          <ResultsDisplay results={results} />
        </div>

        {/* Simulation Controls */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Run Simulation</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-black mb-1">
                  Number of Games
                </label>
                <input
                  type="number"
                  min="1"
                  value={numGames}
                  onChange={(e) => setNumGames(parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-black mb-1">
                  Strategy
                </label>
                <select
                  value={strategy}
                  onChange={(e) => setStrategy(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="always_switch">Always Switch</option>
                  <option value="always_stay">Always Stay</option>
                  <option value="random">Random Choice</option>
                </select>
              </div>
            </div>

            <button
              onClick={runSimulation}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Run Simulation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MontyHallSimulator;