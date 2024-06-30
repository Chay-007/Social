import usePagination from './usePagination';
import {getTagsList} from '../network_storage_store/network_API/API';
import {getObject, storeObject} from '../../LocalDB/LocalDb';
import {
  extractSelectedId,
  updateInitailSelectedIds,
} from '../Helpers/CommonHelpers';
import {showMiniMessage} from '../Helpers/ShowMiniModalsHelpers';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const useTagsList = () => {
  const navigation = useNavigation();
  const [TotalTagLength, setTotal] = useState();
  const getData = async page => {
    if (MyList.length) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    const HitPage = page == 1 ? 1 : currentPage;
    try {
      await getTagsList({
        page: HitPage,
      }).then(res => {
        if (res?.data?.data?.list?.total >= 0) {
          setTotal(res?.data?.data?.list?.total);
        }
        if (res?.data?.data?.list?.data?.length) {
          const List =
            page == 1
              ? res?.data?.data?.list?.data
              : [...MyList, ...res?.data?.data?.list?.data];
          setList(List);
          setCurrentPage(prev => (page == 1 ? 1 : false || prev) + 1);
          getAlreadySelectedOption(List);
        } else {
          if (page == 1) {
            setList([]);
          }
        }
      });
    } catch (error) {
      console.error('Error fetching data at Comments Screen:', error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const getAlreadySelectedOption = async List => {
    const SelectedIDs = await getObject('Tags');
    if (SelectedIDs && Array.isArray(SelectedIDs)) {
      const UpdatedList = await updateInitailSelectedIds(List, SelectedIDs);
      setList(UpdatedList);
    }
  };

  const StoreSelectedOption = async () => {
    const SelectedIDs = extractSelectedId(MyList);
    if (SelectedIDs && Array.isArray(SelectedIDs)) {
      if (SelectedIDs.length) {
        const res = await storeObject('Tags', SelectedIDs);
        showMiniMessage({
          message: 'Selected Tags Updated Successfully',
          type: 'success',
        });
        navigation.goBack();
      } else {
        showMiniMessage({message: 'Please Select Tags', type: 'warning'});
      }
    } else {
      showMiniMessage({message: 'Tags To Store Is Not Array', type: 'warning'});
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
  return {...AllProps, getData, onRefresh, StoreSelectedOption, TotalTagLength};
};

export default useTagsList;
