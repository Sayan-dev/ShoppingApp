import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Card from '../../../commons/Card/Card';
import Trend from './Trend/Trend';

const TrendBody = ({data, likedHandler, handleCardClick}) => {
  return (
    <ScrollView horizontal style={styles.eachTrend}>
      {Object.keys(data).map((id) => {
        return (
          <Trend
            handleCardClick={handleCardClick}
            key={id}
            likedHandler={likedHandler}
            data={data[id]}
          />
        );
      })}
    </ScrollView>
  );
};

const Trends = ({
  title = 'Trends',
  likedHandler = () => {},
  list,
  navigation,
  ...props
}) => {
  const handleCardClick = (data) => {
    console.log('Trend', data);
    navigation.navigate('DescriptionScreen', data);
  };
  return (
    <Card
      style={styles.trendComponent}
      title={title}
      Body={() => (
        <TrendBody
          handleCardClick={handleCardClick}
          likedHandler={likedHandler}
          data={list}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  trendComponent: {justifyContent: 'center', height: 200, marginVertical: 10},
  eachTrend: {height: '70%', marginVertical: 0},
});

Trends.propTypes = {};

export default Trends;
