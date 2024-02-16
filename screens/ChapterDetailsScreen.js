import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FlipCard from 'react-native-flip-card';
import { API_BASE_URL } from '../config/config';

const ChapterDetailsScreen = ({ route }) => {
  const { chapterId } = route.params;
  const [chapterDetails, setChapterDetails] = useState([]);
  const [detailContent, setDetailContent] = useState({});
  const [loadingDetails, setLoadingDetails] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/chapters/${chapterId}/details`)
      .then(response => response.json())
      .then(data => {
        setChapterDetails(data);
        navigation.setOptions({
            title: data[0].chapter.title,
        });
      })
      .catch(error => {
        console.error('Error fetching chapter details: ', error);
      });
  }, [chapterId]);

  const loadDetailContent = (detailId) => {
    if (loadingDetails[detailId]) return; 
    setLoadingDetails(prev => ({ ...prev, [detailId]: true }));
    fetch(`${API_BASE_URL}/api/chapters/details/${detailId}`)
      .then(response => response.json())
      .then(data => {
        const sentences = data.detailContent.split(';');
        setDetailContent(prevState => ({ ...prevState, [detailId]: sentences }));
        setLoadingDetails(prev => ({ ...prev, [detailId]: false }));
      })
      .catch(error => {
        console.error('Error fetching detail content: ', error);
        setLoadingDetails(prev => ({ ...prev, [detailId]: false }));
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {chapterDetails.map((detail, index) => (
        <FlipCard 
          key={index}
          flipHorizontal={true}
          flipVertical={false}
          style={styles.card}
          onFlipEnd={() => loadDetailContent(detail.id)}
        >
          {/* 앞면 */}
          <View style={styles.face}>
            <Text style={styles.cardText}>{detail.content}</Text>
          </View>
          {/* 뒷면 */}
          <View style={styles.back}>
            {loadingDetails[detail.id] ? (
              <ActivityIndicator />
            ) : (
              detailContent[detail.id] ? (
                <Text style={styles.cardText}>
                  {detailContent[detail.id].join('\n')}
                </Text>
              ) : (
                <ActivityIndicator />
              )
            )}
          </View>
        </FlipCard>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 10,
  },
  card: {
    width: '100%', // 너비를 100%로 설정
    minHeight: 80, // 최소 높이 설정
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginVertical: 5,
    elevation: 1,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 1 },
  },
  face: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  back: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
  },
  cardText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ChapterDetailsScreen;
