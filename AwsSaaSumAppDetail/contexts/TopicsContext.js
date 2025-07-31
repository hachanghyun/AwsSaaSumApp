import React, { createContext, useState, useEffect } from 'react';
import { topics } from '../assets/topics'; // 실제 경로로 수정 필요
import { subtopics } from '../assets/subtopics'; // 실제 경로로 수정 필요

export const TopicsContext = createContext();

export const TopicsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("!!!!!!!!!!!!!!! 목차 호출!!!!!!!!!!!!!!!!!!1");

    const fetchData = async () => {
      try {
        // 여기서는 데이터를 로컬에서 가져오므로 별도의 fetch 작업은 필요 없습니다.
        console.log("data1", topics);
        console.log("data2", subtopics);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <TopicsContext.Provider value={{ topics, subtopics, isLoading }}>
      {children}
    </TopicsContext.Provider>
  );
};
