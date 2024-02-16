import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_BASE_URL } from '../config/config'; // config.js에서 URL 가져오기

const ChapterDetailsScreen = ({ route }) => {
  const { chapterId } = route.params;
  const [chapterDetails, setChapterDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/chapters/${chapterId}/details`)
      .then(response => response.json())
      .then(data => {
        setChapterDetails(data);
        setIsLoading(false);
        // 네비게이션 바의 타이틀을 detail의 content로 동적으로 설정합니다.
        //console.log(data);
        //debugger;
        navigation.setOptions({
            title: data[0].chapter.title,
            });
      })
      .catch(error => {
        console.error('Error fetching chapter details: ', error);
        setIsLoading(false);
      });
  }, [chapterId]);

  const navigateToDetailContent = (detailId) => {
    navigation.navigate('Description', { detailId });
  };

  /*
  // 네비게이션 바의 타이틀을 현재 선택된 chapter의 title로 설정합니다.
  useEffect(() => {
    if (chapterDetails.length > 0) {
      navigation.setOptions({
        title: chapterDetails[0].title, // 챕터의 title로 설정합니다.
      });
    }
  }, [chapterDetails, navigation]);
  */

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {chapterDetails.map((detail, index) => (
        <TouchableOpacity 
          key={index} 
          onPress={() => navigateToDetailContent(detail.id)}
          style={styles.card}
        >
          <Text style={styles.cardText}>{detail.content}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'left',
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
    justifyContent: 'left',
    alignItems: 'left',
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    padding: 20,
  },
  cardText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChapterDetailsScreen;
