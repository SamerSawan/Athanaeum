interface LentBookCardProps {
    isEven: boolean;
    isTop?: boolean;
    isBot?: boolean;
}

export default function LentBookCard({ isEven, isTop = false, isBot = false }: LentBookCardProps) {
    return (
        <div className={`flex flex-row ${isEven ? 'bg-primary-300' : 'bg-primary-200'} w-1/2 justify-between px-8 py-2 items-center font-semibold ${isTop ? 'rounded-t' : ''} ${isBot ? 'rounded-b' : ''}`}>
            {/* book cover */}
            <img
                src="https://m.media-amazon.com/images/I/91p594CxSpL._AC_UF1000,1000_QL80_.jpg"
                alt="Les Miserables"
                className="w-32 h-52 mr-10 rounded-md"
            />

            {/* title and author */}
            <div className="text-center">
                <p>Les Miserables</p>
                <p>Victor Hugo</p>
            </div>
            {/* person */}
            <div>
                <p>Joanna</p>
            </div>
            {/* Lend Date */}
            <div className="text-center">
                <p>Lent on</p>
                <p>2024-08-01</p>
            </div>
            {/* Due Date */}
            <div className="text-center">
                <p>Due on</p>
                <p>2024-08-11</p>
            </div>
            {/* Due Status */}
            <div>
                <p className="text-red-700">Due</p>
            </div>
        </div>
    );
}
