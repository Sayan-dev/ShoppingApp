import React from 'react';
import {View} from 'react-native';
import CatagoryHeader from './CatagoryHeader/CatagoryHeader';
import CatagoryBody from './CatagoryBody/CatagoryBody';

const CatagoryLayout = ({...props}) => {
  return (
    <View>
      <CatagoryHeader {...props} />
      <CatagoryBody />
    </View>
  );
};

CatagoryLayout.propTypes = {};

export default CatagoryLayout;
