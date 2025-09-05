import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FeedGrid, { VideoItem } from '@/src/components/FeedGrid';
import { mockVideos } from '@/src/mocks/videoData';

export default function FeedScreen() {
  const insets = useSafeAreaInsets();
  
  const handleVideoPress = (video: VideoItem) => {
    Alert.alert(
      'Vídeo Selecionado',
      `${video.title}\n${video.views} visualizações`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <FeedGrid 
        videos={mockVideos} 
        onVideoPress={handleVideoPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});