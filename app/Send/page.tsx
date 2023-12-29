"use client"

import Link from 'next/link';
import { useState } from 'react';


function Page() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(message)
    // Add your logic for handling the form submission or updating state here
  };

  return (
    <div className="flex justify-center flex-col gap-4 items-center h-screen">
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 justify-center items-center'>
        <input
          type="text"
          placeholder="enter a message"
          className="border-2 border-black p-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className='flex gap-3'>
        <button type="submit" className='border-2 border-black w-[120px]  bg-blue-300 p-2'>Submit</button>
        <Link href="/" className='border-2 border-black w-[120px]  bg-blue-300 p-2 text-center'>
             Home
        </Link>      
        </div>
      
      </form>

    </div>
  );
}

export default Page;
