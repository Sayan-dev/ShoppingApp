import React from 'react';
import DescriptionBody from './DescriptionBody';
import CarousalCard from '../../commons/Card/CarousalCard';

const CardDescription = ({navigation, route, ...props}) => {
  console.log(route);
  const data = route.params;
  return (
    <CarousalCard
      carouselData={data.uri}
      imageHeight="50%"
      Body={() => {
        return <DescriptionBody {...data} />;
      }}
    />
  );
};

CardDescription.propTypes = {};

export default CardDescription;
