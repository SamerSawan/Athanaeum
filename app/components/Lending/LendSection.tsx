import LentBookCard from "./LentBookCard";

export default function LendSection() {
    return (
        <div className="flex flex-col items-center w-full mt-10">
            <LentBookCard isEven={true} isTop={true}></LentBookCard>
            <LentBookCard isEven={false}></LentBookCard>
            <LentBookCard isEven={true} isBot={true}></LentBookCard>
        </div>
    )
}