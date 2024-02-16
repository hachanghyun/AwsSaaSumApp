import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_BASE_URL } from '../config/config'; // config.js에서 URL 가져오기

const AnswerScreen = ({ route }) => {
  const navigation = useNavigation();
  const initialText = route.params?.text || '';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [additionalText, setAdditionalText] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // 버튼 활성화 상태

  useEffect(() => {
    if (index < initialText.length + additionalText.length) {
      const totalText = initialText + additionalText;
      const timer = setTimeout(() => {
        setDisplayedText(displayedText + totalText.charAt(index));
        setIndex(index + 1);
      }, 20);

      return () => clearTimeout(timer);
    } else if (initialText.length > 0 && displayedText.length === initialText.length) {
      setIsButtonEnabled(true); // 텍스트가 완전히 표시되면 버튼 활성화
    }
  }, [index, displayedText, initialText, additionalText]);

  const handleButtonPress = () => {
    sendBotRequest();
    setIsButtonEnabled(false); // 버튼 숨김 처리
  };

  const sendBotRequest = () => {
    setIsFetchingData(true);
    const message = `${initialText}에 대한 정답을 알려주세요.`;
    console.log(message);

    fetch(`${API_BASE_URL}/api/topics/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then(response => response.json())
      .then(data => {
        setAdditionalText(data.choices[0].text);
        setIsFetchingData(false);
      })
      .catch(error => {
        setIsFetchingData(false);
        console.error('Error sending bot request: ', error);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>{displayedText}</Text>
      {isFetchingData && (
        <ActivityIndicator size="large" color="#007BFF" />
      )}
      {!isFetchingData && isButtonEnabled && (
        <TouchableOpacity
          onPress={handleButtonPress}
          style={[
            styles.button,
            !isButtonEnabled ? styles.buttonDisabled : styles.buttonEnabled
          ]}
          disabled={!isButtonEnabled}
        >
          <Text style={styles.buttonText}>
            정답 보기
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonEnabled: {
    backgroundColor: '#007BFF',
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AnswerScreen;
