import usePagination from './usePagination';
import {GetSubmitedListApi} from '../network_storage_store/network_API/API';

const useSubmitedList = PostID => {
  const getData = async page => {
    if (MyList.length) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    const HitPage = page == 1 ? 1 : currentPage;
    try {
      await GetSubmitedListApi({
        page: HitPage,
        post_id: PostID,
      }).then(res => {
        if (res?.data?.data?.data?.length) {
          const List =
            page == 1
              ? res?.data?.data?.data
              : [...MyList, ...res?.data?.data?.data];
          setList(List);
          setCurrentPage(prev => (page == 1 ? 1 : false || prev) + 1);
        } else {
          if (page == 1) {
            setList([]);
          }
        }
      });
    } catch (error) {
      console.error('Error fetching data at Reviews Screen:', error);
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

export default useSubmitedList;
