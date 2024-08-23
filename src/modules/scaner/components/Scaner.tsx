import React, {useCallback, useState, useRef, useEffect} from 'react';
import {
  Camera,
  PhotoFile,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {Stack, useFocusEffect} from 'expo-router';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

const Scaner = () => {
  const device = useCameraDevice('back', {
    physicalDevices: ['ultra-wide-angle-camera'],
  });

  const {hasPermission, requestPermission} = useCameraPermission();

  const [isActive, setIsActive] = useState(false);
  const [photo, setPhoto] = useState<PhotoFile>();

  const camera = useRef<Camera>(null);

  useFocusEffect(
    useCallback(() => {
      setIsActive(true);
      return () => {
        setIsActive(false);
      };
    }, []),
  );

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  if (!hasPermission) {
    return <ActivityIndicator />;
  }

  if (!device) {
    return <Text>Camera device not found</Text>;
  }

  return (
    <View style={{flex: 1}}>
      <Stack.Screen options={{headerShown: false}} />

      <Camera
        ref={camera}
        device={device}
        isActive={isActive && !photo}
        photo
      />

      {photo && (
        <>
          <Image source={{uri: photo.path}} style={StyleSheet.absoluteFill} />
          <FontAwesome5
            onPress={() => setPhoto(undefined)}
            name="arrow-left"
            size={24}
            color="white"
            style={{position: 'absolute', top: 50, left: 30}}
          />
        </>
      )}
    </View>
  );
};

export default Scaner;
