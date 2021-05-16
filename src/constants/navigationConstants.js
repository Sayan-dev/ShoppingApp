export const catagories = {
  Grocery: {
    iconName: 'store',
    name: 'Grocery',
    navigateTo: 'HomeCatagory',
    leftStyle: {
      marginVertical: -5,
      paddingVertical: 0,
    },
    titleSize: 14,
    data: {
      catagory: 'Grocery',
      headerImage:
        'https://www.vanillaluxury.sg/sites/default/files/field/image/banner_136.png',
    },
  },
  Electronics: {
    iconName: 'cellphone',
    name: 'Electronics',
    navigateTo: 'HomeCatagory',
    leftStyle: {
      marginVertical: -5,
      paddingVertical: 0,
    },
    titleSize: 14,
    data: {
      catagory: 'Electronics',
      headerImage:
        'https://matjarii.com/media/codazon/slideshow/cache/880x380/b/a/banners_new-08.jpg',
    },
  },
  Services: {
    iconName: 'human-handsup',
    name: 'Services',
    navigateTo: 'HomeCatagory',
    leftStyle: {
      marginVertical: -5,
      paddingVertical: 0,
    },
    titleSize: 14,
    data: {
      catagory: 'Services',
      headerImage:
        'https://mobisoftinfotech.com/resources/wp-content/uploads/2018/10/On-demand-Home-Services-Banner.png',
    },
  },
};

export const navMenuList = {
  'My Account': {
    name: 'My Account',
    iconName: 'account',
    navigateTo: 'Settings',
    data: {},
  },
  'Offer Zone': {
    name: 'Offer Zone',
    iconName: 'heart-multiple',
    navigateTo: 'Settings',
    data: {},
  },
  Catagories: {
    name: 'Catagories',
    iconName: 'grid',
    navigateTo: 'Settings',
    children: {
      ...catagories,
    },
    data: {},
  },
  Notification: {
    name: 'Notification',
    iconName: 'clock-outline',
    navigateTo: 'Settings',
    data: {},
  },
  'My Orders': {
    name: 'My Orders',
    iconName: 'playlist-check',
    navigateTo: 'Settings',
    data: {},
  },
  'My Chats': {
    name: 'My Chats',
    iconName: 'chat',
    navigateTo: 'Settings',
    data: {},
  },
  'Privacy Policy': {
    name: 'Privacy Policy',
    iconName: 'security',
    navigateTo: 'security',
    data: {},
  },
};
