

export default function NavBar(){
    return (
    <div className="flex flex-row justify-between w-full font-bold">
        <span>ATHENIUM</span>
        <div className="flex flex-row justify-between w-1/3 font-bold">
          <span>Dashboard</span>
          <span>Bookshelves</span>
          <span>Lending</span>
        </div>
    </div>
    )
}