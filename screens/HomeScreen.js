import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// 이미지 파일 가져오기
const chapterImage = require('../assets/chapterImage.png'); // 경로는 프로젝트 구조에 따라 달라질 수 있습니다.

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    // 버튼을 눌렀을 때 Index 화면으로 이동합니다.
    navigation.navigate('목차');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleButtonPress} style={styles.imageContainer}>
        <Image source={chapterImage} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Start Summary</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // 버튼을 이미지 아래로 정렬
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20, // 버튼을 위로 올림
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 180,
    height: 195,
  },
});

export default HomeScreen;
