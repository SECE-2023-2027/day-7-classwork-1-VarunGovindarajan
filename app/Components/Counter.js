'use client';
import {useState} from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center gap-5 text'>
      <div className='text-2xl font-bold'>{count}</div>
      <button className='px-5 py3 text-white bg-green-500 active:bg-green-600 rounded-lg' onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}