import React, { useState } from 'react';
import Chatbot from './components/Chatbot';
import data from './data/preguntasFrecuentes';

function App() {
  const [preguntasFrecuentes] = useState(data);

  return (
    <div className="App">
      <Chatbot preguntasFrecuentes={preguntasFrecuentes} />
    </div>
  );
}

export default App;