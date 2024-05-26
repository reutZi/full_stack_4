import classes from './GetTo100.module.css';

function Profile({ userName, scores }) {
    let record = Math.min(...scores);

  return (
    <div className={classes.card}>
      <h2>{userName}</h2>
      <h3>Your record: {record} moves</h3>
      <h3>Your scores:</h3>
       <ul>
        {scores.map((score, idx) => (
          <li key={idx}>{score}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
