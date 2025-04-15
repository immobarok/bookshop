const getStoreReadList = () => {
   //read list 
   const storedListStr = localStorage.getItem('read-list');
   if (storedListStr) {
      //data in localStorage are string 
      //data str -> js object convert 
      const storedList = JSON.parse(storedListStr);
      return storedList;
   } else {
      return [];
   }
}

const addToStoredReadList = (id) => {
   const storedList = getStoreReadList();
   //already exist check 
   if (storedList.includes(id)) {
      console.log(id, 'Id already exists in the read list ');
   } else {
      storedList.push(id);
      const storedListStr = JSON.stringify(storedList);
      localStorage.setItem('read-list', storedListStr);
   }
}

export { addToStoredReadList };