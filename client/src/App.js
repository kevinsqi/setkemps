import React from 'react';

import io from 'socket.io-client';

function App() {
  React.useEffect(() => {
    const socket = io.connect('http://localhost:3001');

    socket.on('init', (item) => {
      console.log('init', item);
    });

    socket.emit('join', 'ABCDEF');
  }, []);

  return (
    <div>
      <h1>Setkemps</h1>
    </div>
  );
}

export default App;
