import React, { useState, useCallback } from 'react';
import update from 'immutability-helper';
import Card from './card';
import CalcIcon from './svg/calc-icon';
import WorldIcon from './svg/world-icon';
import MusicIcon from './svg/music-icon';
import PaintIcon from './svg/paint-icon';
import LowCard from './low-card';
import ToolIcon from './svg/tool-icon';
import PencilIcon from './svg/pencil-icon';
import SongIcon from './svg/song-icon';

function CardGrid() {
  const [cards, setCards] = useState([
    {
      id: 1,
      color: 'bg-red-300',
      title: 'Maths',
      topics: 40,
      icon: <CalcIcon className='self-end w-16 h-14' />,
    },
    {
      id: 2,
      color: 'bg-purple-200',
      title: 'Science',
      topics: 26,
      icon: <WorldIcon className='self-end w-16 h-14' />,
    },
    {
      id: 3,
      color: 'bg-green-200',
      title: 'Music',
      topics: 30,
      icon: <MusicIcon className='self-end w-16 h-14' />,
    },
    {
      id: 4,
      color: 'bg-yellow-200',
      title: 'Painting',
      topics: 20,
      icon: <PaintIcon className='self-end w-16 h-14' />,
    },
  ]);
  const [lowCards, setLowCards] = useState([
    {
      id: 1,
      color: 'bg-gray-200',
      title: 'Crossword Puzzles',
      icon: <ToolIcon className='w-8 h-7' />,
      uppercase: true,
      twoColumns: true,

    },
    {
      id: 2,
      color: 'bg-indigo-200',
      title: 'Essay',
      icon: <PencilIcon className='w-8 h-7' />,
      uppercase: false,
      twoColumns: false,
    },
    {
      id: 3,
      color: 'bg-blue-200',
      title: 'Rhymes',
      icon: <SongIcon className='w-8 h-7' />,
      uppercase: false,
      twoColumns: false,
    },
  ]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setCards((prevCards) => update(prevCards, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, prevCards[dragIndex]],
      ],
    }));
  }, []);
  const moveLowCard = useCallback((dragIndex, hoverIndex) => {
    setLowCards((prevCards) => update(prevCards, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, prevCards[dragIndex]],
      ],
    }));
  }, []);
  const renderCard = useCallback((card, index) => (
    <Card key={card.id} moveCard={moveCard} index={index} id={card.id} className={`flex flex-col justify-end ${card.color} rounded-xl w-full h-full p-4`} title={card.title} topicNumber={card.topics} Icon={card.icon} />
  ), []);
  const renderLowCard = useCallback((card, index) => (
    <LowCard key={card.id} moveLowCard={moveLowCard} index={index} id={card.id} className={`flex items-center justify-between ${card.uppercase ? 'uppercase' : null} ${card.color} ${card.twoColumns ? 'col-span-2' : null} rounded-xl w-full h-full p-4`} title={card.title} topicNumber={card.topics} Icon={card.icon} />
  ), []);

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-2 grid-rows-2 gap-4'>
        {cards.map((card, i) => renderCard(card, i))}
      </div>
      <hr className='border-2 border-blue-500 my-4 rounded w-1/2 mx-auto' />
      <div className='grid grid-cols-2 grid-rows-2 gap-4'>
        {lowCards.map((card, i) => renderLowCard(card, i))}
      </div>
    </div>
  );
}

export default CardGrid;
