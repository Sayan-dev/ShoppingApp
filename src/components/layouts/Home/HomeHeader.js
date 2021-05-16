import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from '../../commons/Card/Card';
import {Text, useTheme} from 'react-native-paper';
import shopWoman from '../../../assets/images/girlShop.jpg';
import {APP_NAME} from '../../../constants/appConstants';

const HomeHeader = ({navigation, route, ...props}) => {
  const theme = useTheme();

  return (
    <View style={styles.homeHeader}>
      <Card
        style={styles.homeHeaderCard}
        Body={() => (
          <View style={styles.homeHeaderCardBody}>
            <Text
              style={{
                color: theme.colors.primary,
                fontFamily: theme.fonts.medium.fontFamily,
                fontSize: theme.fonts.medium.fontSize + 4,
              }}>
              {APP_NAME}
            </Text>
          </View>
        )}
        background={shopWoman}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeHeader: {height: 400},
  homeHeaderCard: {height: '100%'},
  homeHeaderCardBody: {marginTop: 300, marginLeft: 200},
});

HomeHeader.propTypes = {};

export default HomeHeader;
