import usePagination from './usePagination';
import {
  GetHomePageListApi,
  GetNearUPageListApi,
} from '../network_storage_store/network_API/API';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useRef, useState} from 'react';

const useNearU = () => {
  const route = useRoute();
  const searchQueryRef = useRef(route?.params?.searchQuery);
  const [PostCount, SetPostsCount] = useState(50);

  const getData = async page => {
    if (MyList.length) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    const HitPage = page == 1 ? 1 : currentPage;
    try {
      await GetNearUPageListApi({
        page: HitPage,
        name: searchQueryRef.current,
      }).then(res => {
        SetPostsCount(res?.data?.data?.list?.total || 50);

        if (res?.data?.data?.list?.data?.length) {
          const List =
            page == 1
              ? res?.data?.data?.list?.data
              : [...MyList, ...res?.data?.data?.list?.data];
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
    searchQueryRef.current = null;
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

export default useNearU;
