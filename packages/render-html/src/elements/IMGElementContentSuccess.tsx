import React, { useCallback } from 'react';
import {
  Image,
  ImageErrorEventData,
  ImageStyle,
  NativeSyntheticEvent
} from 'react-native';
import { IMGElementStateSuccess } from './img-types';

const defaultImageStyle: ImageStyle = { resizeMode: 'cover' };

export default function IMGElementContentSuccess({
  alt,
  source,
  imageStyle,
  dimensions,
  onError
}: IMGElementStateSuccess) {
  const onImageError = useCallback(
    ({ nativeEvent: { error } }: NativeSyntheticEvent<ImageErrorEventData>) =>
      onError(error),
    [onError]
  );
  return (
    <Image
      accessibilityRole="image"
      accessibilityLabel={alt}
      source={source}
      onError={onImageError}
      style={[defaultImageStyle, dimensions, imageStyle]}
      testID="image-success"
    />
  );
}
