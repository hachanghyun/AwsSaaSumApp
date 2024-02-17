import React, { useState, useContext,useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView, TextInput, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_BASE_URL } from '../config/config'; // config.js에서 URL 가져오기
import { TopicsContext } from '../contexts/TopicsContext'; // TopicsContext를 import합니다

const SearchScreen = () => {
  const [chapterDetails, setChapterDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredChapters, setFilteredChapters] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const navigation = useNavigation();
  const { subtopics } = useContext(TopicsContext); // Context에서 subtopics를 가져옵니다
  
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = subtopics.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredChapters(filteredData);
  };

  useEffect(() => {
    //console.log("Subtopics 로드 상태:", subtopics);
    setFilteredChapters(subtopics); // 컴포넌트 로딩 시 모든 서브토픽을 표시
  }, [subtopics]);

  const navigateToDetailContent = (subtopicName) => {
    setIsFetchingData(true);
    const message = `AWS ${subtopicName}에 대해 알려줘.`;
    console.log(message);
    const botRequest = {
      message: message,
    };

    fetch(`${API_BASE_URL}/api/topics/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(botRequest),
    })
    .then(response => response.json())
    .then(data => {
      
      const parsedData = JSON.parse(data.choices[0].text);

      navigation.navigate('AI 답변 내용', { text: parsedData.content});
    })
    .catch(error => {
      console.error('Error sending bot request: ', error);
    })
    .finally(() => {
      setIsFetchingData(false);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="검색..."
          value={searchQuery}
          onChangeText={(text) => handleSearch(text)}  // 검색 함수를 호출
        />
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {filteredChapters.map((detail, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={() => navigateToDetailContent(detail.name)}
            style={styles.card}
          >
            <Text style={styles.cardText}>{detail.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isFetchingData}
        onRequestClose={() => {}}
      >
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10, // 검색창 상단 여백
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default SearchScreen;
