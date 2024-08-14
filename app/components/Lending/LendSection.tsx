import LentBookCard from "./LentBookCard";
import { lentBooks } from "@/app/constants";

export default function LendSection() {
    return (
        <div className="flex flex-col items-center w-full mt-10">
            {lentBooks.map((book, index) => (
                <LentBookCard
                    key={index}
                    isEven={index % 2 === 0}
                    isTop={index === 0}
                    isBot={index === lentBooks.length - 1}
                    src={book.src}
                    alt={book.alt}
                    title={book.title}
                    author={book.author}
                    person={book.person}
                    lentDate={book.lentDate}
                    dueDate={book.dueDate}
                    dueStatus={book.dueStatus}
                />
            ))}
        </div>
    );
}
