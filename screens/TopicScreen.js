// TopicsScreen.js
import React, { useContext } from 'react'; // useContext를 추가합니다
import { ScrollView, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { TopicsContext } from '../contexts/TopicsContext'; // TopicsContext를 import합니다

const TopicsScreen = ({ navigation }) => {
  const { topics, isLoading } = useContext(TopicsContext); // Context에서 데이터를 가져옵니다

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
