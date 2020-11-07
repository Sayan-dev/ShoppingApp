import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Card from '../../commons/Card/Card';
import { Paragraph, Text, useTheme } from 'react-native-paper';
import shopWoman from "../../../assets/images/girlShop.jpg";

const HomeHeader = ({navigation,route,...props}) => {
    const theme=useTheme()

    return (
        <View style={{height:400}}>
        <Card
            style={{height:"100%"}}
            Body={
              ()=><View style={{marginTop:300,marginLeft:200}}>
                  <Text style={{color:theme.colors.primary,fontFamily:theme.fonts.medium.fontFamily,fontSize:theme.fonts.medium.fontSize+4}}>
                    LocAD App
                  </Text>
              </View>
            }
            background={shopWoman}
            
          />
          </View>
    );
};

HomeHeader.propTypes = {
    
};

export default HomeHeader;