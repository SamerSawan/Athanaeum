interface LentBookCardProps {
    isEven: boolean;
    isTop?: boolean;
    isBot?: boolean;
    src: string;
    alt: string;
    title: string;
    author: string;
    person: string;
    lentDate: string;
    dueDate: string;
    dueStatus: string;
}

export default function LentBookCard({ isEven, isTop = false, isBot = false, src, alt, title, author, person, lentDate, dueDate, dueStatus }: LentBookCardProps) {
    return (
        <div className={`flex flex-row ${isEven ? 'bg-primary-300' : 'bg-primary-200'} w-1/2 justify-between px-8 py-2 items-center font-semibold ${isTop ? 'rounded-t' : ''} ${isBot ? 'rounded-b' : ''}`}>
            <img
                src={src}
                alt={alt}
                className="w-32 h-52 rounded-md"
            />

            <div className="text-center w-48">
                <p>{title}</p>
                <p>{author}</p>
            </div>

            <div className="w-20">
                <p>{person}</p>
            </div>

            <div className="text-center">
                <p>Lent on</p>
                <p>{lentDate}</p>
            </div>

            <div className="text-center">
                <p>Due on</p>
                <p>{dueDate}</p>
            </div>

            <div>
                <p className={`${dueStatus === "Due" ? 'text-red-800' : dueStatus === "On Loan" ? 'text-green-600' : 'text-yellow-600'}`}>{dueStatus}</p>
            </div>
        </div>
    );
}
