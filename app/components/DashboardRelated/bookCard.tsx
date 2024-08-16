"use client";
import React, { useState } from 'react';
import UpdateProgressModal from './UpdateProgressModal'; // Import the modal component

export default function BookCard() {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex items-center bg-primary-50 px-6 rounded-lg shadow-lg w-[551px] h-full self-center">
      {/* Book Image */}
      <img
        src="https://m.media-amazon.com/images/I/91p594CxSpL._AC_UF1000,1000_QL80_.jpg"
        alt="Les Miserables"
        className="w-32 h-auto mr-6 rounded-md"
      />
      
      {/* Book Info */}
      <div className="flex flex-col justify-between h-full w-full py-12">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-white text-xl font-semibold">Les Miserables</h2>
            <h3 className="text-slate-300 text-sm">Victor Hugo</h3>
          </div>
          <div className="text-slate-400 text-xs">
            <span className="mr-3">Started</span>
            <span className="text-white">2024-08-06</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="my-4">
          <div className="h-2 rounded-full bg-primary-200">
            <div className="h-2 rounded-full bg-primary-500" style={{ width: '38%' }}></div>
          </div>
          <span className="text-slate-300 text-sm mt-1">38%</span>
        </div>

        {/* Update Progress Button */}
        <button onClick={toggleModal} className="bg-secondary-200 text-white py-2 px-4 rounded-md text-sm hover:bg-secondary-100 transition">
          Update Progress
        </button>
      </div>

      {/* Modal */}
      <UpdateProgressModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
}
