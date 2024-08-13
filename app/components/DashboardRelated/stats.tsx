import React from "react"

export default function Stats() {
    return (
        <div className="flex flex-col bg-primary-50 w-[207px] rounded-md p-4 gap-8">
            <div className="flex flex-row gap-2">
                <div className="w-12 h-12 border-4 border-secondary-100 rounded-full flex justify-center items-center">
                    <p>1</p>
                </div>
                <div className="flex items-center ml-2 text-sm">
                    Reading Streak
                </div>
            </div>
            <div className="flex flex-row gap-2">
                <div className="w-12 h-12 border-4 border-secondary-100 rounded-full flex justify-center items-center">
                    <p>8</p>
                </div>
                <div className="flex items-center ml-2 text-center max-w-24 text-sm">
                    Books Read This Year
                </div>
            </div>
            <div className="flex flex-row gap-2">
                <div className="w-12 h-12 border-4 border-secondary-100 rounded-full flex justify-center items-center">
                    <p>4</p>
                </div>
                <div className="flex items-center ml-2 text-center max-w-28 text-sm">
                    Books Currently Lent Out
                </div>
            </div>
        </div>
    )

}