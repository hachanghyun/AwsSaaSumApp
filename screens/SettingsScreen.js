import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const sourceImage = require('../assets/about.jpg');

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.headerText}>Version</Text>
          <Text style={styles.text}>1.0.7</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.headerText}>Contact Me</Text>
          <Text style={styles.text}>hacwx1@gmail.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // 전체 컨테이너를 중앙 정렬
    backgroundColor: '#f4f4f4', // 밝은 배경색 설정
    marginTop: 100,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, // 이미지를 원형으로 만듦
    marginTop: 60,
    marginBottom: 30,
  },
  content: {
    width: '90%', // 컨텐츠 영역 폭 설정
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 15, // 세로 간격 증가
    paddingHorizontal: 10, // 가로 간격 설정
    backgroundColor: '#fff', // 행 배경색
    marginBottom: 10, // 행 간 간격
  },
  headerText: {
    fontWeight: 'bold',
    color: '#333', // 글씨 색상
    fontSize: 18, // 글씨 크기
  },
  text: {
    fontSize: 16,
    color: '#666', // 글씨 색상
  },
});

export default SettingsScreen;
