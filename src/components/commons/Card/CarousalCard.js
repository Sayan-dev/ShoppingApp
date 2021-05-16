import React, {useState} from 'react';
import {Card as RNPCard, useTheme} from 'react-native-paper';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  CAROUSEL_ITEM_WIDTH,
  SCREEN_WIDTH,
} from '../../../constants/carousalConstant';

const CarousalCard = ({
  title = null,
  subtitle = null,
  carouselData = [],

  imageHeight = '100%',
  imageWidth = '100%',
  imageResizeMode = 'contain',

  coverMargin = 0,
  Body,
  background,
  bodyProps,
  actions,
  ...props
}) => {
  const theme = useTheme();
  const [activeSlide, setActiveSlide] = useState(0); // current active slide card

  const renderItem = (
    {item}, // render every carousel content
  ) => (
    <Image
      resizeMode={imageResizeMode}
      style={styles.carousalItem}
      source={{uri: item.image}}
    />
  );
  const renderPagination = () => (
    // render carousel pagination
    <Pagination dotsLength={carouselData.length} activeDotIndex={activeSlide} />
  );
  return (
    <RNPCard theme={theme} {...props}>
      <ImageBackground
        style={styles.imageBackground}
        source={background ? background : null}>
        {title ? <RNPCard.Title title={title} subtitle={subtitle} /> : null}

        {
          <View style={carousalContainer(imageHeight)}>
            <Carousel
              data={carouselData}
              renderItem={renderItem}
              onSnapToItem={(index) => setActiveSlide(index)} // we will update active slide index
              sliderWidth={SCREEN_WIDTH}
              itemWidth={CAROUSEL_ITEM_WIDTH}
            />
            {renderPagination()}
          </View>
        }
        {Body ? (
          <RNPCard.Content>
            <Body {...bodyProps} />
          </RNPCard.Content>
        ) : null}
        {actions ? <RNPCard.Actions>{actions}</RNPCard.Actions> : null}
      </ImageBackground>
    </RNPCard>
  );
};

const carousalContainer = (height) => {
  return {alignItems: 'center', height};
};

const styles = StyleSheet.create({
  carousalItem: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  imageBackground: {width: '100%', height: '100%'},
});

CarousalCard.propTypes = {};

export default CarousalCard;
