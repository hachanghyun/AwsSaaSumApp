// SubtopicsScreen.js
import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, ActivityIndicator, StyleSheet, View, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_BASE_URL } from '../config/config';

const SubtopicsScreen = ({ route }) => {
  const { topicId } = route.params;
  const [subtopics, setSubtopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/topics/${topicId}/subtopics`)
      .then(response => response.json())
      .then(data => {
        setSubtopics(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching subtopics: ', error);
        setIsLoading(false);
      });
  }, [topicId]);

  const sendBotRequest = (subtopicName) => {
    setIsFetchingData(true);
    const message = `AWS 서비스중 ${subtopicName}를 간단히 알려줘`;
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
      setIsFetchingData(false);
      navigation.navigate('AI 답변', { text: data.choices[0].text });
    })
    .catch(error => {
      setIsFetchingData(false);
      console.error('Error sending bot request: ', error);
    });
  };

  const renderLoadingModal = () => {
    return (
      <Modal
        transparent={true}
        animationType="none"
        visible={isLoading || isFetchingData}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {renderLoadingModal()}
      <ScrollView contentContainerStyle={styles.container}>
        {subtopics.map((subtopic) => (
          <TouchableOpacity 
            key={subtopic.id} 
            style={styles.card}
            onPress={() => sendBotRequest(subtopic.name)}
          >
            <Text style={styles.cardText}>{subtopic.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
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
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040', // 반투명 배경
  },
  activityIndicatorWrapper: {
    backgroundColor: 'white',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default SubtopicsScreen;
