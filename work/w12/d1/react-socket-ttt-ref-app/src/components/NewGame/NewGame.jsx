import { useState } from 'react';
import * as socket from '../../socket';

export default function NewGame() {
  const [code, setCode] = useState('');

  return (
    <div>
      <div>
        <label>Enter Invite Code: </label>
        <input className='wide-inp' onChange={(e) => setCode(e.target.value)} />&nbsp;
        <button className='button' onClick={() => socket.joinGame(code)}>Join</button><br/><br/>
      </div>
      <div>- OR -</div><br/><br/>
      <button className='button' onClick={() => socket.newGame()}>Create New Game</button>
    </div>
  );
}
