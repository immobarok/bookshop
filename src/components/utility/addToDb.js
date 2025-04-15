import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const getStoredReadList = () => {
   const storedListStr = localStorage.getItem('read-list');
   if (storedListStr) {
      return JSON.parse(storedListStr);
   } else {
      return [];
   }
};

const addToStoredReadList = (id) => {
   const storedList = getStoredReadList();
   if (storedList.includes(id)) {
      toast.warning('📚 Already marked as read!', {
         position: "top-right",
         autoClose: 2500,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         theme: "colored"
      });
   } else {
      storedList.push(id);
      localStorage.setItem('read-list', JSON.stringify(storedList));
      toast.success('Book added to your read list!', {
         position: "top-right",
         autoClose: 2500,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         theme: "colored"
      });
   }
};

const getStoredWishList = () => {
   const storedWishListStr = localStorage.getItem('wish-list');
   if (storedWishListStr) {
      return JSON.parse(storedWishListStr);
   } else {
      return [];
   }
};

const addToStoredWishList = (id) => {
   const storedWishList = getStoredWishList();
   if (storedWishList.includes(id)) {
      toast.info('❤️ Already in your wishlist!', {
         position: "top-right",
         autoClose: 2500,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         theme: "light"
      });
   } else {
      storedWishList.push(id);
      localStorage.setItem('wish-list', JSON.stringify(storedWishList));
      toast.success('🎉 Added to your wishlist!', {
         position: "top-right",
         autoClose: 2500,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         theme: "light"
      });
   }
};


export { addToStoredReadList, addToStoredWishList, getStoredReadList };
