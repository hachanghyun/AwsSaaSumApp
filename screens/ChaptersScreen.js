import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { API_BASE_URL } from '../config/config'; // config.js에서 URL 가져오기

const ChaptersScreen = ({ navigation }) => {
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/chapters`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setChapters(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {chapters.map((chapter) => (
        <TouchableOpacity 
          key={chapter.id} 
          onPress={() => navigation.navigate('Contents', { chapterId: chapter.id })}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{chapter.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: '#007bff', // Bootstrap primary button color
    padding: 15,
    borderRadius: 5,
    marginVertical: 5, // Adjust vertical margin
    width: '100%', // Set the button width to 100%
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2, // for Android shadow effect
    shadowOpacity: 0.2, // for iOS shadow effect
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default ChaptersScreen;
