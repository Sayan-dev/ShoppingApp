import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Paragraph, Title, useTheme} from 'react-native-paper';
import Avatar from '../../../../commons/Avatar/Avatar';
import {AuthContext} from '../../../../../contexts/authContext';

const UserInfo = (props) => {
  const authData = useContext(AuthContext);

  const theme = useTheme();

  return (
    <View style={userInfoComponent(theme.colors.primary)}>
      <Avatar
        style={styles.avatarStyle}
        type="image"
        size={80}
        source={require('../../../../../assets/images/girlShop.jpg')}
      />
      <Title>
        {authData.user
          ? authData.user.name
            ? authData.user.name
            : authData.user.email
          : null}
      </Title>
      <Paragraph>
        {authData.user
          ? authData.user.name
            ? authData.user.email
            : null
          : null}
      </Paragraph>
    </View>
  );
};

const userInfoComponent = (color) => {
  return {
    width: '100%',
    height: '30%',
    borderColor: color,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  };
};
const styles = StyleSheet.create({
  avatarStyle: {marginBottom: 20},
});

UserInfo.propTypes = {};

export default UserInfo;
