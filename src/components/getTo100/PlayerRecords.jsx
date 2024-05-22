import classes from './GetTo100.module.css';

function PlayerRecords({index, userName, record }){
  return (
    <div className={classes.card} key={index}>
       <h2>{userName}</h2>
      <h3>Best Record: {record} moves</h3>
    </div>
  );
};

export default PlayerRecords;
