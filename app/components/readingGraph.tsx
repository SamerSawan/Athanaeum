import React from 'react';

interface ReadingDay {
  date: string;
  pagesRead: number;
}

interface Week {
  days: ReadingDay[];
}

export interface ReadingData {
  weeks: Week[];
}

const getActivityLevel = (pagesRead: number): number => {
  if (pagesRead >= 80) return 4;
  if (pagesRead >= 40) return 3;
  if (pagesRead >= 20) return 2;
  if (pagesRead === 0) return 0;
  return 1;
};

const ReadingGraph: React.FC<{ data: ReadingData }> = ({ data }) => {
  return (
    <div className='flex flex-col'>
        <div className='text-white font-bold text-center ml-9'>The Past 6 Weeks in Review</div>
        <div className='flex flex-row mt-2'>
        {/* Day Labels */}
        <div className="">
            <div className="text-white font-bold text-center mt-[43px] mr-2">MON</div>
            <div className="text-white font-bold text-center mt-[42px] mr-2">WED</div>
            <div className="text-white font-bold text-center mt-[43px] mr-2">FRI</div>
        </div>
        <div className="grid grid-cols-6 gap-2 bg-primary-50 p-2 rounded-md">
        {/* Reading Graph */}
            {data.weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-rows-7 gap-2">
                {week.days.map((day, dayIndex) => {
                const activityLevel = getActivityLevel(day.pagesRead);
                return (
                    <div
                    key={dayIndex}
                    className={`w-6 h-6 rounded ${
                        activityLevel === 4
                        ? 'bg-primary-500'
                        : activityLevel === 3
                        ? 'bg-primary-400'
                        : activityLevel === 2
                        ? 'bg-primary-300'
                        : activityLevel === 0
                        ? 'bg-primary-100'
                        : 'bg-primary-200'
                    }`}
                    ></div>
                );
                })}
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default ReadingGraph;
