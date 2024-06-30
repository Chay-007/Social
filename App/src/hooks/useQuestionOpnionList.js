import usePagination from './usePagination';
import {
  GetReviewsListApi,
  getQuestionOptionApi,
} from '../network_storage_store/network_API/API';
import {useState} from 'react';

const useQuestionOpnionList = (PostID, QID) => {
  const [Title, SetTitle] = useState('');
  const getData = async page => {
    if (MyList.length) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    const HitPage = page == 1 ? 1 : currentPage;
    try {
      await getQuestionOptionApi({
        page: HitPage,
        post_id: PostID,
        question_id: QID,
      }).then(res => {
        if (QID) {
          SetTitle(res?.data?.data?.survey?.survey_question?.question);
          setList(res?.data?.data?.survey?.survey_question?.select_below || []);
        } else {
          SetTitle(res?.data?.data?.poll?.question);
          setList(res?.data?.data?.select_below);
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
  return {...AllProps, getData, onRefresh, Title};
};

export default useQuestionOpnionList;
