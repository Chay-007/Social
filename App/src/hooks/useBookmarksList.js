import usePagination from './usePagination';
import {GetBookmarkListApi} from '../network_storage_store/network_API/API';

const useBookmarksList = (type, community_id, othersId) => {
  const getData = async page => {
    if (MyList.length && page != 1) {
      setIsRefreshing(true);
    } else {
      setList([]);
      setIsLoading(true);
    }

    const HitPage = page == 1 ? 1 : currentPage;
    try {
      await GetBookmarkListApi({
        page: HitPage,
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

export default useBookmarksList;
