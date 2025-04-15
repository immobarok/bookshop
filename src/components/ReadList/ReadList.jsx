import { ImLocation } from "react-icons/im";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";
import { Link } from 'react-router';

export default function ReadList({ readList }) {
   const { image, bookName, author, review, totalPages, rating, category, tags, badge, bookId, yearOfPublishing, publisher } = readList;

   return (
      <div className='w-full border border-gray-300 rounded-md shadow-md p-4 my-6'>
         <div className='flex flex-col lg:flex-row gap-6'>
            {/* Book Cover Image */}
            <figure className='w-full lg:w-1/5 flex-shrink-0'>
               <img
                  className='w-full h-auto max-w-[200px] mx-auto object-cover rounded-md'
                  src={image}
                  alt={`Cover of ${bookName}`}
               />
            </figure>

            {/* Book Details */}
            <div className='flex-1 flex flex-col gap-3'>
               <h1 className='text-2xl md:text-3xl font-medium text-gray-800'>{bookName}</h1>
               <p className="text-gray-600">By: <i>{author}</i></p>

               {/* Tags Section */}
               {tags && (
                  <div className="mt-2">
                     <div className="flex flex-wrap items-center gap-2">
                        <span className="text-gray-700 font-bold hidden sm:inline-block">Tags:</span>
                        {tags.map((tag, index) => (
                           <span
                              key={index}
                              className="text-lime-500 font-normal rounded-full text-sm sm:text-base px-3 py-1 bg-lime-200/40"
                           >
                              #{tag}
                           </span>
                        ))}
                        <p className="flex items-center gap-1 mt-2 sm:mt-0">
                           <ImLocation className="text-gray-600" />
                           <span className='font-normal text-sm sm:text-base text-gray-600'>
                              Year of publishing: {yearOfPublishing}
                           </span>
                        </p>
                     </div>
                  </div>
               )}

               {/* Publisher and Pages */}
               <div className="flex flex-col sm:flex-row sm:space-x-4 text-gray-600 gap-2 sm:gap-0">
                  <p className="flex items-center gap-2 text-sm sm:text-base font-normal">
                     <AiOutlineUsergroupDelete size={18} />
                     <span>Publisher: {publisher}</span>
                  </p>
                  <p className="flex items-center gap-2 text-sm sm:text-base">
                     <MdOutlineMenuBook size={18} />
                     <span>Pages: {totalPages}</span>
                  </p>
               </div>

               <hr className="border-t border-gray-200 my-2" />

               {/* Category, Rating, and Button */}
               <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-wrap">
                  <span className="py-1 px-3 rounded-full bg-blue-100 text-blue-400 text-sm sm:text-base">
                     Category: {category}
                  </span>
                  <span className="py-1 px-3 rounded-full text-orange-400 bg-orange-100 text-sm sm:text-base">
                     Rating: {rating}
                  </span>
                  <Link to={`/books/${bookId}`}>
                     <button className="btn bg-lime-500 hover:bg-transparent hover:border-lime-400 hover:text-gray-600 transition-colors duration-300 text-white font-medium py-1 px-4 rounded-full text-sm sm:text-base w-full sm:w-auto text-center">
                        View Details
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}