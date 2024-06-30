import usePagination from './usePagination';
import {
  GetBookmarkListApi,
  GetRepostedListApi,
} from '../network_storage_store/network_API/API';
import {useRoute} from '@react-navigation/native';

const useRepostedList = () => {
  const route = useRoute();
  const PostID = route?.params?.PostID;
  const getData = async page => {
    if (MyList.length && page != 1) {
      setIsRefreshing(true);
    } else {
      setList([]);
      setIsLoading(true);
    }

    const HitPage = page == 1 ? 1 : currentPage;
    try {
      await GetRepostedListApi({
        page: HitPage,
        posts_id: PostID,
      }).then(res => {
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
  const AllProps = usePagination(getData);
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

export default useRepostedList;
