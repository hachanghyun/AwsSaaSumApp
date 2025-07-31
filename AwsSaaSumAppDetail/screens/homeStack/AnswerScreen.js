import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_BASE_URL } from '../../config/config';

const AnswerScreen = ({ route }) => {
  const navigation = useNavigation();
  const initialText = route.params?.text || '';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [additionalText, setAdditionalText] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [hasButtonBeenPressed, setHasButtonBeenPressed] = useState(false); // 새 상태 추가

  const scrollViewRef = useRef();

  useEffect(() => {
    if (index < initialText.length + additionalText.length) {
      const totalText = initialText + additionalText;
      const timer = setTimeout(() => {
        setDisplayedText(prevDisplayedText => prevDisplayedText + totalText.charAt(index));
        setIndex(prevIndex => prevIndex + 1);
        scrollViewRef.current?.scrollToEnd({ animated: false }); // 스크롤을 맨 아래로 이동
      }, 10);

      return () => clearTimeout(timer);
    } else {
        // 타이핑이 완료된 경우
        if (!hasButtonBeenPressed && initialText.length > 0 && displayedText.length === initialText.length + additionalText.length) {
            setIsButtonEnabled(true); // 버튼을 활성화하되, 이미 클릭되었으면 활성화하지 않음
            }
    }
  },  [index, displayedText, initialText, additionalText, hasButtonBeenPressed]);

  const handleButtonPress = () => {
    sendBotRequest();
    setIsButtonEnabled(false); // 버튼 숨김 처리
    setHasButtonBeenPressed(true); // 버튼이 클릭되었다는 것을 기록
  };

  const sendBotRequest = () => {
    setIsFetchingData(true);
    const message = `${initialText}에 대한 정답을 알려주세요.`;
    console.log("Qanswer",message);

    fetch(`${API_BASE_URL}/api/topics/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then(response => response.text())
      .then(data => {
        let parsedData;
        try {
          parsedData = JSON.parse(data);
        } catch (error) {
          console.error('Error parsing JSON response: ', error);
          parsedData = data; // JSON 파싱에 실패한 경우 원시 데이터 사용
        }
        setAdditionalText(parsedData);
        setIsFetchingData(false);
      })
      .catch(error => {
        setIsFetchingData(false);
        console.error('Error sending bot request: ', error);
      });
  };

  return (
    <ScrollView 
      ref={scrollViewRef}
      contentContainerStyle={styles.container}
    >
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
