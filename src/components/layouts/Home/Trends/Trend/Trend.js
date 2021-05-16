import React from 'react';
import Card from '../../../../commons/Card/Card';
import {Text, Title, useTheme} from 'react-native-paper';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import IconButton from '../../../../commons/IconButton/IconButton';
import {excessHideForCardNames} from '../../../../../helpers/general';

const Trend = ({data, handleCardClick = () => {}, likedHandler, ...props}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={() => handleCardClick(data)}>
      <Card
        style={styles.trendComponent}
        uri={data.uri[0].image}
        imageHeight="60%"
        Body={() => (
          <View style={styles.trendCard}>
            <View style={styles.treanCardBody}>
              <Title style={{fontSize: theme.fonts.regular.fontSize}}>
                {excessHideForCardNames(6, data.name)}
              </Title>
              <Text style={{fontSize: theme.fonts.light.fontSize}}>
                $ {data.price}
              </Text>
            </View>
            {/* <View style={{width:"20%", borderColor:"blue",borderWidth:1,alignItems:"center"}}> */}
            <View style={styles.treanCardBodyHeart}>
              <IconButton
                color={theme.colors.primary}
                size={theme.fonts.medium.fontSize}
                onPress={() => likedHandler(data.catagory, data.id)}
                icon={data.liked ? 'heart' : 'heart-outline'}
              />
            </View>
          </View>
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  trendComponent: {
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    width: 110,
    marginHorizontal: 4,
  },
  trendCard: {
    width: '110%',
    marginHorizontal: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  treanCardBody: {width: '80%', alignItems: 'flex-start'},
  treanCardBodyHeart: {width: '20%', alignItems: 'flex-end'},
});

Trend.propTypes = {};

export default Trend;
