import Board from '../Board/Board';
import styles from './PlayGame.module.css';

function getCurPlayer(game) {
  return game.turn === 1 ? game.players[0] : game.players[1];
}

function PlayGame({game, isCurPlayer, handlePlayAgain}) {
  const curPlayer = getCurPlayer(game);
  let msg;
  if (game.winner === null) {
    msg = `${curPlayer.name}'s Turn`;
  } else if (game.winner === 0) {
    msg = `It's a Tie!`;
  } else {
    msg = `${curPlayer.name} Wins!`;
  }
  return (
    <div className='page'>
      <h2>{msg}</h2>
      <Board winner={game.winner} board={game.board} isCurPlayer={isCurPlayer}/>
      {game.winner && <button onClick={handlePlayAgain} className={styles.playAgainBtn}>PLAY AGAIN</button>}
    </div>
  );
}

export default PlayGame;