import React from 'react';
import {Card as RNPCard, useTheme} from 'react-native-paper';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';

const Card = ({
  title = null,
  subtitle = null,
  carousal = false,
  cover,
  imageHeight = '60%',
  imageWidth = '70%',
  imageResizeMode = 'contain',
  uri,
  coverMargin = 0,
  Body,
  background,
  bodyProps,
  actions,
  ...props
}) => {
  const theme = useTheme();
  return (
    <RNPCard theme={theme} {...props}>
      <ImageBackground
        style={styles.imageStyle}
        source={background ? background : null}>
        {title ? <RNPCard.Title title={title} subtitle={subtitle} /> : null}

        {cover || uri ? (
          <View style={coverStyle(imageHeight)}>
            <Image
              resizeMode={imageResizeMode}
              style={styles.coverImage}
              source={uri ? {uri: uri} : cover}
            />
          </View>
        ) : null}
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

const coverStyle = (height) => {
  return {alignItems: 'center', height};
};

const styles = StyleSheet.create({
  imageStyle: {width: '100%', height: '100%'},
  coverImage: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
});

Card.propTypes = {};

export default Card;
