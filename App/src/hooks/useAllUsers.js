import usePagination from './usePagination';
import {getAllSocialUsers} from '../network_storage_store/network_API/API';
import React, {useEffect, useState} from 'react';

const useAllUsers = ({CommunityID}) => {
  const [searchQuery, setSearchQuery] = useState('');
  // Initialize a state to store isSelected status
  const [selectedUsersForAdding, setSelectedUsersForAdding] = useState({});

  // When selecting or deselecting a user
  const handleUserSelection = userId => {
    setSelectedUsersForAdding(prevSelectedUsersForAdding => ({
      ...prevSelectedUsersForAdding,
      [userId]: !prevSelectedUsersForAdding[userId], // Toggle the isSelected status
    }));
  };

  const getSelectedForAddingUserIds = () => {
    return Object.entries(selectedUsersForAdding)
      .filter(([userId, isSelected]) => isSelected)
      .map(([userId]) => parseInt(userId)); // Convert IDs to integers if needed
  };
  const getData = async page => {
    if (MyList.length) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }

    const HitPage = page == 1 ? 1 : currentPage;
    try {
      await getAllSocialUsers({
        page: HitPage,
        CommunityID,
        search_name: searchQuery,
      }).then(res => {
        if (CommunityID) {
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
        } else {
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

  useEffect(() => {
    onRefresh();
  }, [searchQuery]);

  const AllProps = usePagination();
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
    searchQuery,
    setSearchQuery,
    selectedUsersForAdding,
    handleUserSelection,
    getSelectedForAddingUserIds,
  };
};

export default useAllUsers;
