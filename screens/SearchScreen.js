// SearchScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { API_BASE_URL } from '../config/config'; // config.js에서 URL 가져오기

const SearchScreen = () => {
  const [chapterDetails, setChapterDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredChapters, setFilteredChapters] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/chapters/search`)
      .then(response => response.json())
      .then(data => {
        setChapterDetails(data);
        setFilteredChapters(data); // 초기 상태에서는 모든 데이터 표시
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = chapterDetails.filter(item =>
      item.content.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredChapters(filteredData);
  };

  const navigateToDetailContent = (detailId) => {
    navigation.navigate('Description', { detailId, fromTab: 'Search' });
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

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
            onPress={() => navigateToDetailContent(detail.id)}
            style={styles.card}
          >
            <Text style={styles.cardText}>{detail.content}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
});

export default SearchScreen;
