import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { User, Settings, Heart, Clock } from 'lucide-react-native';

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <User color="#666" size={60} />
          </View>
          <Text style={styles.username}>@usuario</Text>
          <Text style={styles.bio}>Amante de vídeos e conteúdo criativo</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>127</Text>
            <Text style={styles.statLabel}>Vídeos</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2.5K</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>892</Text>
            <Text style={styles.statLabel}>Seguindo</Text>
          </View>
        </View>

        <View style={styles.menuContainer}>
          <View style={styles.menuItem}>
            <Heart color="#666" size={20} />
            <Text style={styles.menuText}>Vídeos Curtidos</Text>
          </View>
          <View style={styles.menuItem}>
            <Clock color="#666" size={20} />
            <Text style={styles.menuText}>Assistir Mais Tarde</Text>
          </View>
          <View style={styles.menuItem}>
            <Settings color="#666" size={20} />
            <Text style={styles.menuText}>Configurações</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 24,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  username: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 24,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#333',
    marginHorizontal: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
  menuContainer: {
    padding: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 16,
  },
});