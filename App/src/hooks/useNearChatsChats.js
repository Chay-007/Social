import usePagination from './usePagination';
import {getChatNearApi} from '../network_storage_store/network_API/API';
import {useRef, useState} from 'react';
import {getLocation} from '../Helpers/GetLocation';
import {useRoute} from '@react-navigation/native';

const useNearChatsChats = location => {
  const route = useRoute();
  const searchQueryRef = useRef(route?.params?.searchQuery);
  const [currentLoc, setcurrentLoc] = useState({
    latitude: 30.7993,
    longitude: 76.9149,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });
  const getData = async page => {
    if (MyList.length && page != 1) {
      setIsRefreshing(true);
    } else {
      setList([]);
      setIsLoading(true);
    }

    const HitPage = page == 1 ? 1 : currentPage;
    try {
      await getChatNearApi({
        page: HitPage,
        name: searchQueryRef.current,
      }).then(res => {
        if (res?.data?.users?.data?.length) {
          const List =
            page == 1
              ? res?.data?.users?.data
              : [...MyList, ...res?.data?.users?.data];
          setList(List);
          setCurrentPage(prev => (page == 1 ? 1 : false || prev) + 1);
        } else {
          if (page == 1) {
            setList([]);
          }
        }
      });
      if (location) {
        await getLocation()
          .then(({Address, Latitude, Longitude}) => {
            setcurrentLoc({
              ...currentLoc,
              latitude: Latitude,
              longitude: Longitude,
            });
          })
          .catch(error => {
            console.warn('Something Went Wrong While Geting Location');
          });
      }
    } catch (error) {
      console.error('Error fetching data at Favorite Chat Screen:', error);
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
  return {...AllProps, getData, onRefresh, currentLoc};
};

export default useNearChatsChats;
