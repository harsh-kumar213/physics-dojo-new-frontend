"use client"
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import Confetti from 'react-confetti';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1090 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1090, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Question = () => {
  const [isSwinging, setIsSwinging] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [confettiClass, setConfettiClass] = useState('hidden');

  const correctAnswer = 10;

  const checkAnswer = () => {
    if (parseInt(userAnswer) === correctAnswer) {
      setConfettiClass('visible');
      setTimeout(() => {
        setConfettiClass('hidden');
      }, 10000);
    } else {
      alert('Sorry, your answer is incorrect.'); // Display error message if answer is wrong
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwinging(prev => !prev);
    }, 10000); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex justify-center border-t-2 border-t-secondary items-center p-5 w-[100%] h-[100%] bg-primary'>
      <div className='confetti-container'>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          autoPlaySpeed={8500}
          swipeable={true}
          draggable={true}
          ssr={true}
          containerClass='w-full'
        >
          <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='w-7 z-10 h-3 bg-secondary'> </div>
            <div className={`w-20 h-80 flex flex-col items-center relative bottom-1 pendulum ${isSwinging ? 'animate-swing' : ''}`}>
              <div className='w-1 bg-tertiary h-64'></div>
              <div className='w-10 h-10 bg-accent rounded-full'></div>
            </div>
            <div>What is the length of pendulum ?</div>
            <input type='number' id='pendulumAnswer' className='bg-primary' value={userAnswer} onChange={e => setUserAnswer(e.target.value)} />
            <button className='bg-accent rounded w-14 h-8 mt-2' onClick={checkAnswer}>Check</button>
          </div>
        </Carousel>
        {confettiClass === 'visible' && <Confetti className='confetti' />}
      </div>
    </div>
  );
};

export default Question;
