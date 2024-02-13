// DetailContentScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { API_BASE_URL } from '../config/config'; // config.js에서 URL 가져오기

const DetailContentScreen = () => {
  const route = useRoute();
  const { detailId, fromTab } = route.params;
  const [detailContent, setDetailContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/chapters/details/${detailId}`)
      .then(response => response.json())
      .then(data => {
        const sentences = data.detailContent.split(';');
        setDetailContent(sentences);
        setIsLoading(false);
        navigation.setOptions({
          title: data.content,
          headerLeft: (fromTab === 'Search') ? () => (
            <Button
              title="Back"
              onPress={() => navigation.navigate('Search')}
            />
          ) : undefined,
        });
      })
      .catch(error => {
        console.error('Error fetching detail content: ', error);
        setIsLoading(false);
      });
  }, [detailId, navigation, fromTab]);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={styles.container}>
      {detailContent.map((item, index) => (
        <View key={index} style={styles.contentItem}>
          {item.startsWith('http') ? (
            <Image source={{ uri: item }} style={styles.image} />
          ) : (
            <Text style={styles.text}>{item}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  contentItem: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    lineHeight: 30,
    color: '#333333',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
});

export default DetailContentScreen;
