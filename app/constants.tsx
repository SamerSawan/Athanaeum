interface Book {
    src: string;
    alt: string;
  }
  
export interface Bookshelf {
    title: string;
    books: Book[];
}
  
  export const bookshelves: Bookshelf[] = [
    {
      title: "Currently Reading",
      books: [
        { src: "https://m.media-amazon.com/images/I/91p594CxSpL._AC_UF1000,1000_QL80_.jpg", alt: "Les Miserables" },
        { src: "https://m.media-amazon.com/images/I/81a9VfTjy9L._AC_UF1000,1000_QL80_.jpg", alt: "Fifteen Dogs" },
        { src: "https://m.media-amazon.com/images/I/71gnJ-dXgxL._AC_UF1000,1000_QL80_.jpg", alt: "The Design Of Everyday Things" },
        { src: "https://m.media-amazon.com/images/I/81KpDpXOBQL._AC_UF1000,1000_QL80_.jpg", alt: "Lessons in Stoicism" },
        { src: "https://m.media-amazon.com/images/I/71aG0m9XRcL._AC_UF1000,1000_QL80_.jpg", alt: "The Psychology of Money" },
        { src: "https://m.media-amazon.com/images/I/61Nxq9EvcKL._AC_UF1000,1000_QL80_.jpg", alt: "Between Two Fires" },
        { src: "https://m.media-amazon.com/images/I/71B4QfzE2VL._AC_UF1000,1000_QL80_.jpg", alt: "That One Should Disdain Hardships" },
        { src: "https://m.media-amazon.com/images/I/713gps3ojcL._AC_UF1000,1000_QL80_.jpg", alt: "Orientalism" }
      ],
    },
    {
      title: "Read",
      books: [
        { src: "https://m.media-amazon.com/images/I/71aG0m9XRcL._AC_UF1000,1000_QL80_.jpg", alt: "The Psychology of Money" },
        { src: "https://m.media-amazon.com/images/I/71zHDXu1TaL._AC_UF1000,1000_QL80_.jpg", alt: "The Alchemist" },
        { src: "https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg", alt: "Atomic Habits" },
        { src: "https://m.media-amazon.com/images/I/81A-mvlo+QL._AC_UF1000,1000_QL80_.jpg", alt: "The Most Human Human" },
        { src: "https://m.media-amazon.com/images/I/71tbalAHYCL._AC_UF1000,1000_QL80_.jpg", alt: "Ikigai" },
        { src: "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg", alt: "The Lean Startup" },
        { src: "https://m.media-amazon.com/images/I/71gY38GmL2L._AC_UF1000,1000_QL80_.jpg", alt: "The Legacy of Socrates" },
        { src: "https://m.media-amazon.com/images/I/91nYfNvYa7L._AC_UF1000,1000_QL80_.jpg", alt: "The Republic" }
      ],
    },
    {
      title: "Want To Read",
      books: [
        { src: "https://m.media-amazon.com/images/I/91A1-6ny+pL._AC_UF1000,1000_QL80_.jpg", alt: "The Silk Roads" },
        { src: "https://m.media-amazon.com/images/I/51NWb-zMD7L.jpg", alt: "The Blacktongue Thief" },
        { src: "https://m.media-amazon.com/images/I/71XHJct7u3L._AC_UF1000,1000_QL80_.jpg", alt: "Gardens of the Moon" },
        { src: "https://m.media-amazon.com/images/I/716SRbduDiL._AC_UF1000,1000_QL80_.jpg", alt: "Deadhouse Gates" },
      ],
    }
  ];
  
  // constants.tsx

export interface LentBook {
    src: string;
    alt: string;
    title: string;
    author: string;
    person: string;
    lentDate: string;
    dueDate: string;
    dueStatus: string;
  }
  
  export const lentBooks: LentBook[] = [
    { 
        src: "https://m.media-amazon.com/images/I/71aG0m9XRcL._AC_UF1000,1000_QL80_.jpg", 
        alt: "The Psychology of Money", title: "The Psychology of Money", 
        author: "Morgan Housel", 
        person: "Joanna", 
        lentDate: "2024-08-01", 
        dueDate: "2024-08-11", 
        dueStatus: "Due" 
    },
    { 
        src: "https://m.media-amazon.com/images/I/71zHDXu1TaL._AC_UF1000,1000_QL80_.jpg", 
        alt: "The Alchemist", 
        title: "The Alchemist", 
        author: "Paulo Coelho", 
        person: "Tom", 
        lentDate: "2024-07-15", 
        dueDate: "2024-08-25", 
        dueStatus: "On Loan" 
    },
    { 
        src: "https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg", 
        alt: "Atomic Habits", 
        title: "Atomic Habits", 
        author: "James Clear", 
        person: "Alice", 
        lentDate: "2024-06-30", 
        dueDate: "2024-08-16", 
        dueStatus: "Almost Due" 
    },
    { 
        src: "https://m.media-amazon.com/images/I/81A-mvlo+QL._AC_UF1000,1000_QL80_.jpg", 
        alt: "The Most Human Human", 
        title: "The Most Human Human", 
        author: "Brian Christian", 
        person: "Emma", 
        lentDate: "2024-08-05", 
        dueDate: "2024-08-15", 
        dueStatus: "Almost Due" 
    },
    { 
        src: "https://m.media-amazon.com/images/I/71tbalAHYCL._AC_UF1000,1000_QL80_.jpg", 
        alt: "Ikigai", 
        title: "Ikigai", 
        author: "Hector Garcia", 
        person: "John", 
        lentDate: "2024-07-20", 
        dueDate: "2024-07-30", 
        dueStatus: "Due" 
    },
    { 
        src: "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg", 
        alt: "The Lean Startup", 
        title: "The Lean Startup", 
        author: "Eric Ries", 
        person: "Sophia", 
        lentDate: "2024-07-01",
        dueDate: "2024-09-09", 
        dueStatus: "On Loan" 
    },
    { 
        src: "https://m.media-amazon.com/images/I/71gY38GmL2L._AC_UF1000,1000_QL80_.jpg", 
        alt: "The Legacy of Socrates", title: "The Legacy of Socrates", 
        author: "James Rachels", person: "Jake", 
        lentDate: "2024-08-03", 
        dueDate: "2024-08-13", 
        dueStatus: "Due" 
    },
    { 
        src: "https://m.media-amazon.com/images/I/91nYfNvYa7L._AC_UF1000,1000_QL80_.jpg", 
        alt: "The Republic", 
        title: "The Republic", 
        author: "Plato", 
        person: "Lily", 
        lentDate: "2024-08-07", 
        dueDate: "2024-08-17", 
        dueStatus: "Almost Due" 
    }
  ];
  