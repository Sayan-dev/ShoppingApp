import AsyncStorage from '@react-native-async-storage/async-storage';

// check for Local Storage and GET item
export const getFromAS = async (ASKey) => {
  let data;
  if (ASKey) {
    try {
      data = await AsyncStorage.getItem(ASKey);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  // && JSON.parse(AsyncStorage.getItem(ASKey))
};

// check for Local Storage and SAVE item
export const saveInAS = (ASKey, data, next = () => {}) => {
  if (ASKey) {
    try {
      AsyncStorage.setItem(ASKey, data, (_err) => next());
    } catch (error) {
      console.log('try to save in AS: ', error);
    }
  }
};

// check for Local Storage and REMOVE item
export const removeFromAS = (ASKey, next = () => {}) => {
  ASKey &&
    typeof window !== 'undefined' &&
    AsyncStorage.getItem(ASKey, (_err, res) =>
      AsyncStorage.removeItem(ASKey, (_error) => next()),
    );
};

// check for Local Storage and CLEAR
export const clearAS = (next = () => {}) => {
  if (typeof window !== 'undefined') {
    AsyncStorage.clear((_err) => next());
  }
};
