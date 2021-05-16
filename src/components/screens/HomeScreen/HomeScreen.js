import React, {useState} from 'react';
import {Modal, Portal, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';
import HomeHeader from '../../layouts/Home/HomeHeader';
import Trends from '../../layouts/Home/Trends/Trends';

const HomeScreen = ({navigation, route, ...props}) => {
  const theme = useTheme();
  const [brandsList, setBrandList] = useState({
    '1352105da782234': {
      id: '1352105da782234',
      name: 'Mango Cool',
      uri: [
        {
          image:
            'https://static.bhphoto.com/images/images1500x1500/1594281159_1573879.jpg',
        },
        {image: 'https://cdn.mos.cms.futurecdn.net/mVEhQU5grHExywfQsDoAYj.jpg'},
      ],
      price: 435.88,
      catagory: 'forYou',
      liked: true,
    },
    '1352jka1124234': {
      id: '1352jka1124234',
      name: 'Nikkon Lol',
      uri: [
        {
          image:
            'https://static.bhphoto.com/images/images1500x1500/1594281159_1573879.jpg',
        },
      ],
      price: 48.88,
      catagory: 'forYou',
      liked: false,
    },
    '1352105sdf112434': {
      id: '1352105sdf112434',
      name: 'Nikkon Pink',
      uri: [
        {
          image:
            'https://static.bhphoto.com/images/images1500x1500/1594281159_1573879.jpg',
        },
      ],
      price: 48.88,
      catagory: 'forYou',
      liked: false,
    },
    '1352dfs10512234': {
      id: '1352dfs10512234',
      name: 'Nikkon Milk Shake',
      uri: [
        {
          image:
            'https://static.bhphoto.com/images/images1500x1500/1594281159_1573879.jpg',
        },
      ],
      price: 48.88,
      catagory: 'forYou',
      liked: false,
    },
  });

  const [trendlist, setTrendList] = useState({
    13521056782234: {
      id: '13521056782234',
      name: 'Lenovo Laptop',
      uri: [
        {
          image:
            'https://static.digit.in/default/9c79c8e9855529b683ce0793dfbbb36f2ac51ed1.jpeg?tr=1200',
        },
      ],
      price: 48.88,
      catagory: 'trends',
      liked: false,
    },
    13521124234: {
      id: '13521124234',
      name: 'Samsung TV',
      uri: [
        {
          image:
            'https://hnsfpau.imgix.net/5/images/detailed/95/UA32N5300ASXNZ-1.jpg?fit=fill&bg=0FFF&w=1500&h=1000&auto=format,compress',
        },
      ],
      price: 48.88,
      catagory: 'trends',
      liked: true,
    },
    1352105112434: {
      id: '1352105112434',
      name: 'Nikkon Pink',
      uri: [
        {
          image:
            'https://static.bhphoto.com/images/images1500x1500/1594281159_1573879.jpg',
        },
      ],
      price: 48.88,
      catagory: 'trends',
      liked: true,
    },
    135210512234: {
      id: '135210512234',
      name: 'Nikkon Milk Shake',
      uri: [
        {
          image:
            'https://static.bhphoto.com/images/images1500x1500/1594281159_1573879.jpg',
        },
      ],
      price: 48.88,
      catagory: 'trends',
      liked: false,
    },
  });

  const likedHandler = (catagory, id) => {
    if (catagory === 'forYou') {
      const newBrandList = {...brandsList};
      newBrandList[id] = {
        ...newBrandList[id],
        liked: !newBrandList[id].liked,
      };
      setBrandList(newBrandList);
    }
    if (catagory === 'trends') {
      const newTrendList = {...trendlist};
      newTrendList[id] = {
        ...newTrendList[id],
        liked: !newTrendList[id].liked,
      };
      setTrendList(newTrendList);
    }
  };

  const [visible, setVisible] = useState(true);
  console.log('Hello');
  console.log(route);
  // const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: theme.colors.background,
    height: '70%',
    padding: 50,
  };

  return (
    <SafeAreaView>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        conte={{backgroundColor: theme.colors.background}}>
        <HomeHeader {...props} />
        <Trends
          navigation={navigation}
          likedHandler={likedHandler}
          key="brands"
          list={brandsList}
          title="For You"
        />

        <Trends
          navigation={navigation}
          likedHandler={likedHandler}
          key="trends"
          list={trendlist}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

HomeScreen.propTypes = {};

export default HomeScreen;
