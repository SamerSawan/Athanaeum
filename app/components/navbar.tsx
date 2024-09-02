

export default function NavBar(){
    return (
    <div className="flex flex-row justify-between w-full font-bold">
        <span>ATHENAEUM</span>
        <div className="bg-red-900 w-1/2 rounded-lg">
          <span>Search</span>
        </div>
        <div className="flex flex-row justify-between w-1/3 font-bold">
          <span>Dashboard</span>
          <span>Bookshelves</span>
          <span>Lending</span>
        </div>
    </div>
    )
}