import usePagination from './usePagination';
import {
  GetHomePageListApi,
  getMyCircleApi,
} from '../network_storage_store/network_API/API';
import {useState} from 'react';

const useAllPostedByMe = type => {
  const [PostCount, SetPostsCount] = useState(50);
  const getData = async page => {
    if (MyList.length) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    const HitPage = page == 1 ? 1 : currentPage;
    try {
      await getMyCircleApi({
        page: HitPage,
        type: 'ViewAll' + type,
      }).then(res => {
        SetPostsCount(res?.data?.data[type.toLowerCase()]?.total || 50);

        if (res?.data?.data[type.toLowerCase()]?.data?.length) {
          const List =
            page == 1
              ? res?.data?.data[type.toLowerCase()]?.data
              : [...MyList, ...res?.data?.data[type.toLowerCase()]?.data];
          setList(List);
          setCurrentPage(prev => (page == 1 ? 1 : false || prev) + 1);
        } else {
          if (page == 1) {
            setList([]);
          }
        }
      });
    } catch (error) {
      console.error('Error fetching data at Home Screen:', error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const onRefresh = () => {
    getData(1);
  };

  const AllProps = usePagination(getData);
  const {
    List: MyList,
    setList,
    setIsLoading,
    currentPage,
    setCurrentPage,
    setIsRefreshing,
  } = AllProps;
  return {...AllProps, getData, onRefresh, PostCount};
};

export default useAllPostedByMe;
