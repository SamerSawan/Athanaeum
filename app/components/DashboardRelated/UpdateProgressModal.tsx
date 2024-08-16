import React, { MouseEvent } from 'react';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface UpdateProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpdateProgressModal: React.FC<UpdateProgressModalProps> = ({ isOpen, onClose }) => {
  // Function to close the modal when clicking outside of it
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 w-full"
      onClick={handleBackdropClick} // Close modal on backdrop click
    >
      <div className="relative bg-primary-50 p-8 rounded-lg shadow-lg w-[40%] p-10">
        {/* X Button */}
        <button
          className="absolute top-3 right-4 text-white text-lg"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faX} />
        </button>

        <div className='flex flex-row'>
            <img
            src="https://m.media-amazon.com/images/I/91p594CxSpL._AC_UF1000,1000_QL80_.jpg"
            alt="Les Miserables"
            className="w-48 h-auto mr-12 rounded-md"
            />
            <div className='flex flex-col w-2/3'>
                <div className="flex flex-row gap-4 mb-4">
                    <label className="text-slate-300 text-lg mb-1 block self-center">Currently on page</label>
                    <input
                        type="number"
                        className="p-2 bg-[#AAAEC7] text-black placeholder-black w-32 border border-[#4D5271] rounded-lg focus:outline-none"
                        placeholder="Page #"
                    />
                    <span className='self-center text-2xl'>/ 1253</span>
                </div>
                <div className="mb-4">
                <label className="text-slate-300 text-sm mb-1 block">Leave a note</label>
                <textarea
                    className="w-full h-44 p-2 rounded bg-[#AAAEC7] text-black border border-[#4D5271] placeholder-black focus:outline-none"
                    rows={4}
                    placeholder="Add a note..."
                ></textarea>
                </div>
                <div className="flex justify-end">
                <button onClick={onClose} className="bg-secondary-200 text-white py-2 px-4 rounded-md text-sm hover:bg-secondary-100 transition">
                    Update Progress
                </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProgressModal;
