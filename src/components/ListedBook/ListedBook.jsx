import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../utility/addToDb';
import ReadList from '../ReadList/ReadList';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from 'react-icons/fa6';

function ListedBook() {
   const [readList, setReadList] = useState([]);
   const allBooks = useLoaderData();
   const [toggle, isToggle] = useState(false);
   const [sort, setSort] = useState('');
   const handleToggler = () => {
      isToggle(!toggle);
   }
   useEffect(() => {
      if (allBooks.length) {
         const storedReadList = getStoredReadList();
         const storedReadListInt = storedReadList.map(id => Number(id));
         const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
         setReadList(readBookList);
      }
   }, [allBooks])

   /* Handle sort */
   const handleSort = (sortType) => {
      setSort(sortType);
      if (sortType === 'No of Pages') {
         const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
         console.log(sortedReadList);
         setReadList(sortedReadList)
      } else if (sortType === 'Ratings') {
         const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
         setReadList(sortedReadList)
      }
   }
   return (
      <div>
         <h3 className='text-5xl my-6 text-center font-bold text-gray-700 border-0 bg-gray-100/70 dark:bg-gray-100/10 py-4 dark:text-white rounded-md'>Books</h3>
         <div className='flex items-center justify-center'>
            <button onClick={handleToggler} className="btn bg-lime-500 text-white w-56" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
               {
                  sort ? `Sort by ${sort}` : 'Sort by'
               }
               {
                  toggle ? <FaAngleDown /> : <FaAngleUp />
               }
            </button>
         </div>

         <ul className="dropdown menu w-56 rounded-box bg-base-100 shadow-sm"
            popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
            <li onClick={() => handleSort('Ratings')}><a>Rating</a></li>
            <li onClick={() => handleSort('No of Pages')}><a>No of Pages</a></li>
         </ul>
         <Tabs>
            <TabList>
               <Tab>Read List</Tab>
               <Tab>Wish List</Tab>
            </TabList>

            <TabPanel>
               {
                  readList.map(rl => <ReadList key={rl.bookId} readList={rl}></ReadList>)
               }
            </TabPanel>
            <TabPanel>
               <h2>My wish list</h2>
            </TabPanel>
         </Tabs>
      </div>
   )
}

export default ListedBook