import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';
import FeedGrid, { VideoItem } from '@/src/components/FeedGrid';
import { mockVideos } from '@/src/mocks/videoData';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const insets = useSafeAreaInsets();

  const filteredVideos = mockVideos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleVideoPress = (video: VideoItem) => {
    console.log('Video pressed:', video.title);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search color="#666" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar vídeos..."
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>
      
      {searchQuery.length > 0 ? (
        <FeedGrid 
          videos={filteredVideos} 
          onVideoPress={handleVideoPress}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Digite algo para buscar vídeos</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchContainer: {
    padding: 16,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#666',
    fontSize: 16,
  },
});