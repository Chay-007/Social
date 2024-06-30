import usePagination from './usePagination';
import {GetHomePageListApi} from '../network_storage_store/network_API/API';
import {useMyContext} from '../network_storage_store/context_store/MyProvider';
import {getObject} from '../../LocalDB/LocalDb';
import {useRoute} from '@react-navigation/native';
import {useRef, useState} from 'react';

const useHome = (type, community_id, othersId) => {
  const {HomeGetDataRef} = useMyContext();
  const route = useRoute();
  const prefred_post = route?.params?.id;
  const searchQueryRef = useRef(route?.params?.key_word);
  const RouteName = route?.name;
  const [PostCount, SetPostsCount] = useState(50);
  const getData = async page => {
    if (MyList.length && page != 1) {
      setIsRefreshing(true);
    } else {
      setList([]);
      setIsLoading(true);
    }

    const HitPage = page == 1 ? 1 : currentPage;
    try {
      const homeFilter =
        RouteName == 'HomeScreen'
          ? await getObject('HomeFilterSelected')
          : null;
      await GetHomePageListApi({
        page: HitPage,
        type: type || '',
        community_id: community_id || '',
        user_id: othersId || '',
        homeFilter: homeFilter || '',
        prefred_post: prefred_post || '',
        key_word: searchQueryRef.current || '',
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
  HomeGetDataRef.current = onRefresh;
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

export default useHome;
