import { ImLocation } from "react-icons/im";
import { AiOutlineUsergroupDelete } from "react-icons/ai";


export default function ReadList({ readList }) {
   const { image, bookName, author, review, totalPages, rating, category, tags, badge, bookId, yearOfPublishing, publisher } = readList;

   return (
      <>
         <div className='flex flex-col w-full  border py-4 px-3 my-6 border-gray-300 rounded-md space-x-6 sm:flex lg:flex-row md:flex-col shadow-md'>
            <figure className='w-1/7'>
               <img className='' src={image} alt="" />
            </figure>
            <div className='w-3/7 flex flex-col space-y-2'>
               <h1 className='text-3xl font-medium text-gray-800'>{bookName}</h1>
               <p className="text-gray-600">By: <i>{author}</i></p>
               {tags && (
                  <div className="mt-4">
                     <div className="flex flex-wrap items-center gap-2">
                        <span className="text-gray-700 font-bold">Tags:</span>
                        {tags.map((tag, index) => (
                           <span
                              key={index}
                              className="text-lime-500 font-normal rounded-full text-base px-4 bg-lime-200/40"
                           >
                              #{tag}
                           </span>
                        ))}
                        <p className="flex items-center gap-1">
                           <ImLocation className="text-gray-600" />
                           <span className='font-normal text-base text-gray-600'>
                              Year of publishing:{yearOfPublishing}</span>
                        </p>
                     </div>
                  </div>
               )}
               <div>
                  <p className="flex items-center gap-2 text-base text-gray-600 font-normal">
                     <AiOutlineUsergroupDelete size={20} />
                     <span>Publisher : {publisher}</span>
                  </p>
               </div>
            </div>
         </div>
      </>
   )
}
