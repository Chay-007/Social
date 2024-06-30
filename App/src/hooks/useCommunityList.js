import usePagination from './usePagination';
import {
  GetCommunitysListApi,
  GetReviewsListApi,
} from '../network_storage_store/network_API/API';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';

const useCommunityList = () => {
  const isFocused = useIsFocused();
  const getData = async page => {
    if (MyList.length) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    const HitPage = page == 1 ? 1 : currentPage;
    try {
      await GetCommunitysListApi({
        page: HitPage,
      }).then(res => {
        if (res?.data?.data?.lists?.data?.length) {
          const List =
            page == 1
              ? res?.data?.data?.lists?.data
              : [...MyList, ...res?.data?.data?.lists?.data];
          setList(List);
          setCurrentPage(prev => (page == 1 ? 1 : false || prev) + 1);
        } else {
          if (page == 1) {
            setList([]);
          }
        }
      });
    } catch (error) {
      console.error('Error fetching data at Community List Screen:', error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const onRefresh = () => {
    getData(1);
  };

  useEffect(() => {
    onRefresh();
  }, [isFocused]);

  const AllProps = usePagination();
  const {
    List: MyList,
    setList,
    setIsLoading,
    currentPage,
    setCurrentPage,
    setIsRefreshing,
  } = AllProps;
  return {...AllProps, getData, onRefresh};
};

export default useCommunityList;
