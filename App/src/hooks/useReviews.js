import usePagination from './usePagination';
import {GetReviewsListApi} from '../network_storage_store/network_API/API';
import {useState} from 'react';

const useReviews = PostID => {
  const [Title, SetTitle] = useState('');
  const [LeftTitle, SetLeftTitle] = useState('');
  const getData = async page => {
    if (MyList.length) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    const HitPage = page == 1 ? 1 : currentPage;
    try {
      await GetReviewsListApi({
        page: HitPage,
        posts_id: PostID,
      }).then(res => {
        if (res?.data?.data?.title?.description) {
          SetTitle(res?.data?.data?.title?.description);
          SetLeftTitle(
            res?.data?.data?.title?.review ? 'Reviews :' : 'Suggesstions :',
          );
        }
        if (res?.data?.data?.success?.data?.length) {
          const List =
            page == 1
              ? res?.data?.data?.success?.data
              : [...MyList, ...res?.data?.data?.success?.data];
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
  return {...AllProps, getData, onRefresh, Title, LeftTitle};
};

export default useReviews;
