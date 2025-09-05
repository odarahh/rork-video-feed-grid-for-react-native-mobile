import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import { Image } from 'expo-image';
import { Eye } from 'lucide-react-native';

export interface VideoItem {
  id: string;
  thumbnail: string;
  title: string;
  views: number;
}

interface FeedGridProps {
  videos: VideoItem[];
  onVideoPress?: (video: VideoItem) => void;
}

const { width: screenWidth } = Dimensions.get('window');
const GAP = 1;
const COLUMNS = 3;
const itemWidth = (screenWidth - (GAP * (COLUMNS + 1))) / COLUMNS;

export default function FeedGrid({ videos, onVideoPress }: FeedGridProps) {
  const renderVideoItem = ({ item }: { item: VideoItem }) => (
    <TouchableOpacity
      style={styles.videoItem}
      onPress={() => onVideoPress?.(item)}
      testID={`video-item-${item.id}`}
    >
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.thumbnail}
        contentFit="cover"
        transition={200}
      />
      <View style={styles.overlay}>
        <View style={styles.viewsContainer}>
          <Eye size={12} color="white" />
          <Text style={styles.viewsText}>
            {item.views >= 1000 
              ? `${(item.views / 1000).toFixed(1)}k` 
              : item.views.toString()
            }
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderVideoItem}
        keyExtractor={(item) => item.id}
        numColumns={COLUMNS}
        scrollEventThrottle={16}
        removeClippedSubviews={true}
        maxToRenderPerBatch={15}
        windowSize={10}
        initialNumToRender={9}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        testID="feed-grid-list"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    padding: GAP,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: GAP,
  },
  videoItem: {
    width: itemWidth,
    height: itemWidth * 1.4,
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewsText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});