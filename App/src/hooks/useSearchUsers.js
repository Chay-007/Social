import usePagination from './usePagination';
import {SearchUsersListApi} from '../network_storage_store/network_API/API';
import {useState} from 'react';

const useSearchUsers = searchQuery => {
  const [CommunitysList, setCommunitysList] = useState([]);
  const getData = async () => {
    if (MyList.length || CommunitysList?.length) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    try {
      await SearchUsersListApi({
        name: searchQuery,
      }).then(res => {
        if (res?.data?.data?.users?.length) {
          setList(res?.data?.data?.users);
        } else {
          setList([]);
        }
        if (res?.data?.data?.community?.length) {
          setCommunitysList(res?.data?.data?.community);
        } else {
          setCommunitysList([]);
        }
      });
    } catch (error) {
      console.error('Error fetching data at Comments Screen:', error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const onRefresh = () => {
    getData();
  };

  const AllProps = usePagination(getData);
  const {List: MyList, setList, setIsLoading, setIsRefreshing} = AllProps;
  return {...AllProps, getData, onRefresh, CommunitysList};
};

export default useSearchUsers;
