import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TopicsContext } from '../contexts/TopicsContext';
import { API_BASE_URL } from '../config/config';

const SubtopicsScreen = ({ route }) => {
  const { topicId } = route.params;
  const { subtopics, isLoading } = useContext(TopicsContext);
  const navigation = useNavigation();
  const [isFetchingData, setIsFetchingData] = useState(false);

  const filteredSubtopics = subtopics.filter(subtopic => subtopic.topic.id.toString() === topicId.toString());

  const sendBotRequest = (subtopicName) => {
    setIsFetchingData(true);
    const message = `안녕 너는 세계적인 AWS 아키텍처 전문가야.너의 소개멘트랑 형식적인 말 생략해줬으면 좋겠어. AWS 서비스중 ${subtopicName}에 대해 간단히 설명해줘.`;
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
      navigation.navigate('AI 답변', { text: data.choices[0].text });
    })
    .catch(error => {
      console.error('Error sending bot request: ', error);
    })
    .finally(() => {
      setIsFetchingData(false); // API 호출이 완료된 후에 상태 변경
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {filteredSubtopics.map((subtopic) => (
          <TouchableOpacity 
            key={subtopic.id} 
            style={styles.card}
            onPress={() => sendBotRequest(subtopic.name)}
          >
            <Text style={styles.cardText}>{subtopic.name}</Text>
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
    paddingTop: 10,
    paddingHorizontal: 10,
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

export default SubtopicsScreen;
