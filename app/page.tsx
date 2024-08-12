import NavBar from "./components/navbar";
import BookCard from "./components/bookCard";
import ReadingGraph, { ReadingData } from "./components/readingGraph";
import QuoteOfTheDay from "./components/quoteOfTheDay";
import Stats from "./components/stats";


const readingData: ReadingData = {
  weeks: [
    {
      days: [
        { date: '2024-08-01', pagesRead: 10 },
        { date: '2024-08-02', pagesRead: 30 },
        { date: '2024-08-03', pagesRead: 50 },
        { date: '2024-08-04', pagesRead: 15 },
        { date: '2024-08-05', pagesRead: 25 },
        { date: '2024-08-06', pagesRead: 75 },
        { date: '2024-08-07', pagesRead: 100 },
      ],
    },
    {
      days: [
        { date: '2024-08-08', pagesRead: 0 },
        { date: '2024-08-09', pagesRead: 10 },
        { date: '2024-08-10', pagesRead: 0 },
        { date: '2024-08-11', pagesRead: 25 },
        { date: '2024-08-12', pagesRead: 50 },
        { date: '2024-08-13', pagesRead: 80 },
        { date: '2024-08-14', pagesRead: 100 },
      ]
    },
    {
      days: [
        { date: '2024-08-15', pagesRead: 25 },
        { date: '2024-08-16', pagesRead: 48 },
        { date: '2024-08-17', pagesRead: 75 },
        { date: '2024-08-18', pagesRead: 0 },
        { date: '2024-08-19', pagesRead: 30 },
        { date: '2024-08-20', pagesRead: 41 },
        { date: '2024-08-21', pagesRead: 10 },
      ]
    },
    {
      days: [
        { date: '2024-08-22', pagesRead: 12 },
        { date: '2024-08-23', pagesRead: 55 },
        { date: '2024-08-24', pagesRead: 42 },
        { date: '2024-08-25', pagesRead: 30 },
        { date: '2024-08-26', pagesRead: 20 },
        { date: '2024-08-27', pagesRead: 100 },
        { date: '2024-08-28', pagesRead: 100 },
      ]
    },
    {
      days: [
        { date: '2024-08-29', pagesRead: 120 },
        { date: '2024-08-30', pagesRead: 10 },
        { date: '2024-08-31', pagesRead: 0 },
        { date: '2024-09-01', pagesRead: 0 },
        { date: '2024-09-02', pagesRead: 0 },
        { date: '2024-09-03', pagesRead: 20 },
        { date: '2024-09-04', pagesRead: 45 },
      ]
    },
    {
      days: [
        { date: '2024-08-29', pagesRead: 120 },
        { date: '2024-08-30', pagesRead: 10 },
        { date: '2024-08-31', pagesRead: 0 },
        { date: '2024-09-01', pagesRead: 0 },
        { date: '2024-09-02', pagesRead: 0 },
        { date: '2024-09-03', pagesRead: 20 },
        { date: '2024-09-04', pagesRead: 45 },
      ]
    },
    // Additional weeks...
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between px-24 py-12">
      <NavBar/>
      <h1 className="font-bold text-4xl mt-16 ml-40">Welcome, Samer</h1>
      <div className="flex flex-col gap-10 justify-center w-full mt-16 items-center">
        <div className="flex justify-between w-1/2">
          <BookCard/>
          <ReadingGraph data={readingData} />
        </div>
        <div className="flex justify-between w-1/2">
          <QuoteOfTheDay></QuoteOfTheDay>
          <Stats></Stats>
        </div>
      </div>
    </main>
  );
}
