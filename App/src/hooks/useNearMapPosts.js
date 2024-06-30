import usePagination from './usePagination';
import {GetNearUPageListApi} from '../network_storage_store/network_API/API';
import {useEffect, useRef, useState} from 'react';
import {getLocation} from '../Helpers/GetLocation';
import {useRoute} from '@react-navigation/native';

const useNearMapPosts = ({latitude, longitude}) => {
  const [PostCount, SetPostsCount] = useState(50);

  const Location = useRef({
    latitude: latitude,
    longitude: longitude,
    Address: '',
  });

  const getData = async page => {
    if (MyList.length) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    const HitPage = page == 1 ? 1 : currentPage;
    try {
      if (!Location?.current?.latitude || !Location?.current?.longitude) {
        return;
      }
      console.warn(Location?.current?.Address);
      await GetNearUPageListApi({
        page: HitPage,
        lat: Location?.current?.latitude,
        long: Location?.current?.longitude,
        search_location: Location?.current?.Address,
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
    getData(1);
  };

  const AllProps = usePagination();
  const {
    List: MyList,
    setList,
    setIsLoading,
    currentPage,
    setCurrentPage,
    setIsRefreshing,
  } = AllProps;
  return {...AllProps, getData, onRefresh, Location, PostCount};
};

export default useNearMapPosts;
