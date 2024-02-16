import React, { createContext, useState, useEffect } from 'react';
import { API_BASE_URL } from '../config/config';

export const TopicsContext = createContext();

export const TopicsProvider = ({ children }) => {
  const [topics, setTopics] = useState([]);
  const [subtopics, setSubtopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("!!!!!!!!!!!!!!! 목차 호출!!!!!!!!!!!!!!!!!!1");
    fetch(`${API_BASE_URL}/api/topics`)
      .then(response => response.json())
      .then(data => {
        setTopics(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching topics: ', error);
      });

    fetch(`${API_BASE_URL}/api/topics/suball`)
      .then(response => response.json())
      .then(data => {
        setSubtopics(data);
      })
      .catch(error => {
        console.error('Error fetching subtopics: ', error);
      });
  }, []);

  return (
    <TopicsContext.Provider value={{ topics, subtopics, isLoading }}>
      {children}
    </TopicsContext.Provider>
  );
};
