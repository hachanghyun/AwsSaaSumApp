import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const sourceImage = require('../assets/about.jpg');

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.cell}><Text style={styles.headerText}>Version</Text></View>
        <View style={styles.cell}><Text style={styles.text}>1.0</Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}><Text style={styles.headerText}>Summary Source</Text></View>
        <View style={styles.cell}><Image source={sourceImage} style={styles.image} />
          <Text style={styles.text}>AWS 공인 솔루션스 아키텍트 스터디 가이드 - 어소시에이트 4/e</Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}><Text style={styles.headerText}>AI Model</Text></View>
        <View style={styles.cell}><Text style={styles.text}>gpt-3.5-turbo</Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.cell}><Text style={styles.headerText}>Contact Me</Text></View>
        <View style={styles.cell}><Text style={styles.text}>hacwx1@gmail.com</Text></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 80, // 상단 패딩만 적용
      paddingHorizontal: 0, // 수평 패딩은 0으로 설정
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      paddingVertical: 10,
      width: '100%', // 가로줄을 전체 화면 너비로 설정
    },
    cell: {
      flex: 1,
      paddingHorizontal: 10,
      alignItems: 'center', // 셀 내용을 가운데 정렬
    },
    headerText: {
      fontWeight: 'bold',
      marginBottom: 10, // 헤더 텍스트 아래 마진 추가
    },
    text: {
      fontSize: 16,
      textAlign: 'center', // 텍스트 가운데 정렬
      marginTop: 10, // 이미지 위 마진 추가
    },
    image: {
      width: 100,
      height: 120,
    },
  });
  

export default SettingsScreen;
