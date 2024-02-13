// TopicsScreen.js
import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { API_BASE_URL } from '../config/config';

const TopicsScreen = ({ navigation }) => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/topics`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setTopics(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching topics: ', error);
        setIsLoading(false);
      });
  }, []);

  const handlePressTopic = (topicId) => {
    navigation.navigate('서브토픽 목차', { topicId });
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={styles.container}>
      {topics.map((topic) => (
        <TouchableOpacity
          key={topic.id}
          onPress={() => handlePressTopic(topic.id)}
          style={styles.topic}
        >
          <Text style={styles.topicText}>{topic.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  topic: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    width: 'auto',
    marginLeft: 10,
    marginRight: 10,
  },
  topicText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default TopicsScreen;
