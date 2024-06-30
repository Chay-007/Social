import firestore from '@react-native-firebase/firestore';
const useOnlineLastSeen = () => {
  const UpdateFirebaseStatus = ({UserID, appStateVisible}) => {
    if (appStateVisible == 'active') {
      firestore()
        .collection('users')
        .doc(`${UserID}`)
        .set({
          UserStatus: 'Online',
        })
        .then(() => {
          console.log('Online Status Updated');
        });
    }
    if (appStateVisible == 'background' || appStateVisible == 'inactive') {
      firestore()
        .collection('users')
        .doc(`${UserID}`)
        .set({
          LastSeenAt: Date.now(),
        })
        .then(() => {
          console.log('Offline Status Updated');
        });
    }
  };
  const OnLogoutFireStore = ({UserID}) => {
    firestore()
      .collection('users')
      .doc(`${UserID}`)
      .set({
        LastSeenAt: Date.now(),
      })
      .then(() => {
        console.log('Offline Status Updated');
      });
  };
  return {UpdateFirebaseStatus, OnLogoutFireStore};
};

export default useOnlineLastSeen;
