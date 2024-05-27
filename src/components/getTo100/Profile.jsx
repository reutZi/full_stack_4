import classes from './GetTo100.module.css';

function Profile({ userName, scores }) {

  let record = Math.min(...scores);
  let sortedScores = scores.sort((a, b) => a - b);

  return (
    <div className={classes.profile}>
      <h2>{userName}</h2>
      <h3>Your Record: {record} {record === 1? "move" : "moves"}</h3>
      <h3>Your Scores:</h3>
      <ul>
        {sortedScores.map((score, idx) => (
          <li key={idx}>{score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
