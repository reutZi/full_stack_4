import React, { useEffect, useState } from 'react';
import PlayerRecords from './PlayerRecords';
import classes from './GetTo100.module.css';

function Records({openNewGame}) {
  const [topPlayers, setTopPlayers] = useState([]);

  useEffect(() => {
    // Fetch users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Calculate the best score for each user
    const userRecords = users.map(user => ({
      userName: user.userName,
      record: Math.min(...user.scores)
    }));
    
    // Sort users by their best scores in ascending order
    userRecords.sort((a, b) => a.record - b.record);
    
    // Get the top 3 players
    setTopPlayers(userRecords.slice(0, 3));
  }, []);

  return (
    <div className={classes.records}>
      <h1>Top 3 Players</h1>
      <div className={classes.player_cards}>
        {topPlayers ? 
        topPlayers.map((player, index) => {
        return (
          <PlayerRecords 
            index={index} 
            userName={player.userName} 
            record={player.record} 
          />
        );
      })
      : <h2>No records yet!</h2> }
      </div>
      <button onClick={openNewGame}>Open new game</button>
    </div>
  );
};

export default Records;
