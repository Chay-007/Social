import {PermissionsAndroid, Platform} from 'react-native';
import {useEffect, useState} from 'react';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {createThumbnail} from 'react-native-create-thumbnail';

const useImageVideoPicker = MimeTypes => {
  const [MultiSelection, SetMultiSelection] = useState(false);
  const [Images, SetImages] = useState([]);
  const [AllAlbums, SetAllAlbums] = useState([]);
  const [SelectedAlbum, SetSelectedAlbum] = useState(null);

  const [SelectedImageVideos, setSelectedImageVideos] = useState({});

  // When selecting or deselecting a user
  const handleImageVideoSelection = (ID, ImageVideo) => {
    setSelectedImageVideos(prevSelectedImageVideos => ({
      ...prevSelectedImageVideos,
      [ID]: ImageVideo, // Toggle the isSelected status
    }));
  };

  const getSelectedImagesVideos = () => {
    return Object.entries(SelectedImageVideos)
      .filter(([ID, isSelected]) => isSelected)
      .map(([ID, isSelected]) => isSelected); // Convert IDs to integers if needed
  };

  async function hasAndroidPermission() {
    const getCheckPermissionPromise = async () => {
      if (Platform.Version >= 33) {
        const [hasReadMediaImagesPermission, hasReadMediaVideoPermission] =
          await Promise.all([
            PermissionsAndroid.check(
              PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
            ),
            PermissionsAndroid.check(
              PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
            ),
          ]);
        return hasReadMediaImagesPermission && hasReadMediaVideoPermission;
      } else {
        return PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        );
      }
    };

    const hasPermission = await getCheckPermissionPromise();
    if (hasPermission) {
      getAllPhotos();
      getAllAlbums();
      return true;
    }
    const getRequestPermissionPromise = async () => {
      if (Platform.Version >= 33) {
        const statuses = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
        ]);
        return (
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
            PermissionsAndroid.RESULTS.GRANTED
        );
      } else {
        const status = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        );
        return status === PermissionsAndroid.RESULTS.GRANTED;
      }
    };
    await getRequestPermissionPromise();
    getAllPhotos();
    getAllAlbums();
  }

  useEffect(() => {
    hasAndroidPermission();
    // getAllAlbums();
    // getAllVideos();
  }, [SelectedAlbum]);

  const getAllPhotos = () => {
    CameraRoll.getPhotos({
      first: 1000,
      assetType: 'Photos',
      mimeTypes: Array.isArray(MimeTypes) ? MimeTypes : null,
      groupName: SelectedAlbum,
    })
      .then(r => {
        // console.warn(JSON.stringify(r.edges));
        SetImages(r.edges);
      })
      .catch(err => {
        //Error Loading Images
      });
  };
  // const getAllVideos = () => {
  //   CameraRoll.getPhotos({
  //     first: 10,
  //     assetType: 'Videos',
  //     // groupName: 'Screenshots',
  //   })
  //     .then(r => {
  //       console.warn(JSON.stringify(r.edges));
  //       // SetImages(r.edges);

  //       createThumbnail({
  //         url: 'file:///storage/emulated/0/Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Video/VID-20240125-WA0000.mp4',
  //         timeStamp: 10000,
  //       })
  //         .then(response => console.log({response}))
  //         .catch(err => console.log({err}));
  //     })
  //     .catch(err => {
  //       //Error Loading Images
  //     });
  // };

  const getAllAlbums = () => {
    CameraRoll.getAlbums({assetType: 'Photos'})
      .then(r => {
        // console.warn(JSON.stringify(r));
        SetAllAlbums(r);
      })
      .catch(err => {
        //Error Loading Images
      });
  };

  // console.warn(AllAlbums);
  return {
    AllAlbums,
    Images,
    handleImageVideoSelection,
    SelectedImageVideos,
    MultiSelection,
    SetMultiSelection,
    getSelectedImagesVideos,
    SetSelectedAlbum,
    SelectedAlbum,
  };
};

export default useImageVideoPicker;
