import { useState, useEffect } from 'react';

const usePagination = getData => {
  const [List, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (getData) {
      getData(1);
    }
  }, []);

  return {List, setList, isLoading, setIsLoading, currentPage, setCurrentPage,isRefreshing, setIsRefreshing};
};

export default usePagination;
