import usePagination from './usePagination';
import {
  GetCommunitysListApi,
  GetReviewsListApi,
} from '../network_storage_store/network_API/API';
import {useNavigation} from '@react-navigation/native';
import {showMiniMessage} from '../Helpers/ShowMiniModalsHelpers';
import {getObject, storeObject} from '../../LocalDB/LocalDb';
import {useState} from 'react';

const useWTPCommunityList = () => {
  const navigation = useNavigation();
  const [SelectedOption, setSelectedOption] = useState(0);

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
          if (page == 1) {
            getAlreadySelectedOption();
          }
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

  const getAlreadySelectedOption = async () => {
    const Res = await getObject('WhereToPostCommunity');
    if (Res) {
      setSelectedOption(Res);
    } else {
      setSelectedOption(0);
    }
  };

  const StoreSelectedOption = async () => {
    if (SelectedOption) {
      const res = await storeObject('WhereToPostCommunity', SelectedOption);
      navigation.goBack();
    } else {
      showMiniMessage('Please Select in Which Community To Post!');
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
  return {
    ...AllProps,
    getData,
    onRefresh,
    StoreSelectedOption,
    setSelectedOption,
    SelectedOption,
  };
};

export default useWTPCommunityList;
