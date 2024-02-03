export default function Header(){
    return(
        <div className="flex justify-end gap-16 mt-8">
           <nav>
        <a>
            Yetenekler    
        </a>
           </nav>
           <nav>
        <a>
            Projeler    
        </a>
           </nav>
           <nav>
        <a >     
            <button className="text-indigo-700 hover:text-white border border-indigo-800 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-indigo-800 dark:text-indigo-800 dark:hover:text-white dark:hover:bg-indigo-800 dark:focus:ring-indigo-800">Beni İşe Al </button>
        </a>
           </nav>
        </div>
    )
}