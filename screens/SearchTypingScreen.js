// SearchTypingScreen.js
import React, { useState, useEffect } from 'react';
import { ScrollView, Text, ActivityIndicator, StyleSheet } from 'react-native';

const SearchTypingScreen = ({ route }) => {
  const text = route.params?.text || '';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, 20); // 50 밀리초 간격으로 한 글자씩 추가

      return () => clearTimeout(timer);
    }
  }, [index, displayedText, text]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>{displayedText}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start', // 내용을 맨 위에서 시작하도록 설정
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'left', // 텍스트를 왼쪽 정렬
    width: '100%', // 텍스트 너비를 100%로 설정
  },
});

export default SearchTypingScreen;
