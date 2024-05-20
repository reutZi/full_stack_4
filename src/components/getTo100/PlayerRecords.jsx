import classes from './GetTo100.module.css';

const PlayerRecords = ({key, userName, record }) => {

  console.log(key, userName, record);
  return (
    <div className={classes.card} key={key}>
       <h2>{userName}</h2>
      <h3>Best Record: {record} moves</h3>
    </div>
  );
};

export default PlayerRecords;
