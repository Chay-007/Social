import {
  CameraRoll,
  cameraRollEventEmitter,
} from '@react-native-camera-roll/camera-roll';
import {useCallback, useEffect, useState} from 'react';
import {AppState, EmitterSubscription} from 'react-native';

const supportedMimeTypesByTheBackEnd = [
  'image/jpeg',
  'image/png',
  'image/heif',
  'image/heic',
  'image/heif-sequence',
  'image/heic-sequence',
];

const useImagesVideosPagination = () => {
  const pageSize = 30;
  const mimeTypeFilter = supportedMimeTypesByTheBackEnd;

  const [isLoading, setIsLoading] = useState(false);
  const [isReloading, setIsReloading] = useState(false);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [nextCursor, setNextCursor] = useState();
  const [photos, setPhotos] = useState();

  const loadNextPagePictures = useCallback(async () => {
    try {
      nextCursor ? setIsLoadingNextPage(true) : setIsLoading(true);
      const {edges, page_info} = await CameraRoll.getPhotos({
        first: pageSize,
        after: nextCursor,
        assetType: 'Photos',
        mimeTypes: mimeTypeFilter,
        ...{include: ['fileSize', 'filename']},
      });
      // const photos = convertCameraRollPicturesToImageDtoType(edges);
      setPhotos(prev => [...(prev ?? []), ...edges]);

      setNextCursor(page_info.end_cursor);
      setHasNextPage(page_info.has_next_page);
    } catch (error) {
      console.error('useImagesVideosPagination getPhotos error:', error);
    } finally {
      setIsLoading(false);
      setIsLoadingNextPage(false);
    }
  }, [mimeTypeFilter, nextCursor, pageSize]);

  const getUnloadedPictures = useCallback(async () => {
    try {
      setIsReloading(true);
      const {edges, page_info} = await CameraRoll.getPhotos({
        first: !photos || photos.length < pageSize ? pageSize : photos.length,
        assetType: 'Photos',
        mimeTypes: mimeTypeFilter,
        // Include fileSize only for android since it's causing performance issues on IOS.
        ...{include: ['fileSize', 'filename']},
      });
      // const newPhotos = convertCameraRollPicturesToImageDtoType(edges);
      setPhotos(edges);

      setNextCursor(page_info.end_cursor);
      setHasNextPage(page_info.has_next_page);
    } catch (error) {
      console.error('useImagesVideosPagination getNewPhotos error:', error);
    } finally {
      setIsReloading(false);
    }
  }, [mimeTypeFilter, pageSize, photos]);

  useEffect(() => {
    if (!photos) {
      loadNextPagePictures();
    }
  }, [loadNextPagePictures, photos]);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (nextAppState === 'active') {
          getUnloadedPictures();
        }
      },
    );

    return () => {
      subscription.remove();
    };
  }, [getUnloadedPictures]);

  useEffect(() => {
    let subscription;
    if (isAboveIOS14) {
      subscription = cameraRollEventEmitter.addListener(
        'onLibrarySelectionChange',
        _event => {
          getUnloadedPictures();
        },
      );
    }

    return () => {
      if (isAboveIOS14 && subscription) {
        subscription.remove();
      }
    };
  }, [getUnloadedPictures]);

  return {
    photos,
    loadNextPagePictures,
    isLoading,
    isLoadingNextPage,
    isReloading,
    hasNextPage,
  };
};

export default useImagesVideosPagination;
