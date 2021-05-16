import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import catagoryBackground from '../../../assets/images/catagoryBackground.png';

const CatagoryHead = (props) => {
  const theme = useTheme();
  return (
    <View style={styles.catagoryHead}>
      <ImageBackground
        style={styles.catagoryHeadImage}
        source={catagoryBackground}>
        <Text style={catagoryHeadTextStyle(theme.fonts.medium, 22)}>
          Catagories
        </Text>
      </ImageBackground>
    </View>
  );
};

const catagoryHeadTextStyle = (themeFont, fontSize) => {
  return {...themeFont, fontSize};
};

const styles = StyleSheet.create({
  catagoryHead: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  catagoryHeadImage: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

CatagoryHead.propTypes = {};

export default CatagoryHead;
