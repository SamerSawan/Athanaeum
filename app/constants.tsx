interface Book {
  src: string;
  alt: string;
}

export interface searchBook {
  src: string;
  alt: string;
  title: string;
  author: string;
  description: string;
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

export const searchDemo: searchBook[] = [
  {
    src: "https://m.media-amazon.com/images/I/71mbJoazlCL._AC_UF1000,1000_QL80_.jpg",
    alt: "Don Quixote",
    title: "Don Quixote",
    author: "Miguel De Cervantes",
    description: "Don Quixote, originally published in two parts in 1605 and 1615, stands as Cervantes' belated but colossal literary success. A work which has achieved mythic status, it is considered to have pioneered the modern novel. Don Quixote, a poor gentleman from La Mancha, Spain, entranced by the code of chivalry, seeks romantic honor through absurd and fantastic adventures. His fevered imagination turns everyday objects into heroic opponents and stepping stones to greater glory; each exploit serves as a comic, yet disturbing commentary on the psychological struggle between reality and illusion, fact and fiction. This celebrated translation by Charles Jarvis offers a new introduction and notes which provide essential background information."
  },
  {
    src: "https://m.media-amazon.com/images/I/91es8r849YL._AC_UF1000,1000_QL80_.jpg",
    alt: "The Three Muskateers",
    title: "The Three Muskateers",
    author: "Alexandre Dumas",
    description: "One of the preeminent novels by French writer Alexandre Dumas, this swashbuckling tale follows a group of honorable 17th-century swordsmen who must contend with powerful adversaries scheming against the queen. Determined to join the royal guard, young d'Artagnan leaves his country home and travels to Paris, where he unintentionally angers Aramis, Athos, and Porthos, the esteemed Three Musketeers. Eventually winning the trust and admiration of the formidable trio of fighters, d'Artagnan joins them in their quest to thwart the plans of the sinister Cardinal Richelieu."
  },
  {
    src: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781643132020/twenty-years-after-9781643132020_hr.jpg",
    alt: "Twenty Years After",
    title: "Twenty Years After",
    author: "Alexandre Dumas",
    description: "Twenty Years After (1845), the sequel to The Three Musketeers, is a supreme creation of suspense and heroic adventure. Two decades have passed since the musketeers triumphed over Cardinal Richelieu and Milady. Time has weakened their resolve, and dispersed their loyalties. But treasons and strategems still cry out for justice: civil war endangers the throne of France, while in England Cromwell threatens to send Charles I to the scaffold. Dumas brings his immortal quartet out of retirement to cross swords with time, the malevolence of men, and the forces of history. But their greatest test is a titanic struggle with the son of Milady, who wears the face of Evil. In his Introduction to this edition David Coward sets both the author and his exciting tale in their historical and cultural contexts. - ;Twenty Years After (1845), the sequel to The Three Musketeers, is a supreme creation of suspense and heroic adventure. Two decades have passed since the musketeers triumphed over Cardinal Richelieu and Milady. Time has weakened their resolve, and dispersed their loyalties. But treasons and strategems still cry out for justice: civil war endangers the throne of France, while in England Cromwell threatens to send Charles I to the scaffold. Dumas brings his immortal quartet out of retirement to cross swords with time, the malevolence of men, and the forces of history. But their greatest test is a titanic struggle with the son of Milady, who wears the face of Evil. In his Introduction to this edition David Coward sets both the author and his exciting tale in their historical and cultural contexts. -"
  }
]
  