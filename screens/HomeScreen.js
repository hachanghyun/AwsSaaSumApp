import React, { useState, useContext,useEffect} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Modal, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { TopicsContext } from '../contexts/TopicsContext';
import { API_BASE_URL } from '../config/config';

const chapterImage = require('../assets/test.png');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedSubtopic, setSelectedSubtopic] = useState('');
  const [isFetchingData, setIsFetchingData] = useState(false);
  const { topics, subtopics } = useContext(TopicsContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
  // 토픽에 따른 서브토픽 필터링
  useEffect(() => {
    if (selectedTopic !== '') {
      const filteredSubtopics = subtopics.filter(subtopic => subtopic.topic.name === selectedTopic);
      setSelectedSubtopic(filteredSubtopics.length > 0 ? filteredSubtopics[0].name : '');
    }
  }, [selectedTopic, subtopics]);

  // 버튼 스타일을 동적으로 결정하는 함수
  const getButtonStyle = () => {
    return isButtonDisabled ? styles.buttonDisabled : styles.button;
  };

  const handleButtonPress = () => {
    const topicId = topics.indexOf(selectedTopic) + 1;
    //fetchSubtopics(topicId);
    navigateToDetailContent();
  };

  const navigateToDetailContent = () => {
    setIsButtonDisabled(true); // 버튼 비활성화
    setIsFetchingData(true);
    // 문제 요청 메시지 구성
    //console.log(selectedSubtopic.name);
    const message = `안녕 너는 세계적인 AWS 아키텍처 전문가야. 형식적인 말 생략하고 AWS SAA ${selectedSubtopic.name} 주제에 관한 문제하나를 내줘 한두문장 사이로 내줘. 정답은 나중에 알려달라고 할때 알려줘.`;
    console.log("문제요청", message);
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
        navigation.navigate('문제', { text: data.choices[0].text });
      })
      .catch(error => {
        console.error('Error sending bot request: ', error);
      })
      .finally(() => {
        setIsFetchingData(false);
        setIsButtonDisabled(false); // 버튼 다시 활성화
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={chapterImage} style={styles.image} />
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedTopic}
          onValueChange={(itemValue, itemIndex) => setSelectedTopic(itemValue)}
          style={styles.picker}
        >
          {topics.map((topic, index) => (
            <Picker.Item key={index} label={topic.name} value={topic.name} />
          ))}
        </Picker>
      </View>
      <TouchableOpacity
        onPress={handleButtonPress}
        style={getButtonStyle()} // 현재 상태에 따라 스타일 적용
        disabled={isButtonDisabled}
      >
        <Text style={styles.buttonText}>
         테스트 시작
        </Text>
      </TouchableOpacity>
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
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#f5f5f5',
    },
    imageContainer: {
      marginBottom: 20,
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
    pickerContainer: {
      width: '100%',
      paddingHorizontal: 20,
    },
    picker: {
      width: '100%',
    },
    button: {
      backgroundColor: '#007BFF',
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 5,
      marginBottom: 20,
    },
    // 비활성화된 버튼의 스타일
    buttonDisabled: {
      backgroundColor: '#CCCCCC', // 회색
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 5,
      marginBottom: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  });

export default HomeScreen;
