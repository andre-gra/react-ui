import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CardGrid from './components/card-sorter/card-grid';

function App() {
  return (
    <div className='w-full p-10'>
      <DndProvider backend={HTML5Backend}>
        <CardGrid />
      </DndProvider>
    </div>
  );
}

export default App;
