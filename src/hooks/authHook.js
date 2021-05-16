import {useState, useCallback, useEffect} from 'react';
import {getFromAS, removeFromAS, saveInAS} from '../helpers/service';
import auth from '@react-native-firebase/auth';

export const useAuth = () => {
  // const [token, setToken] = useState();     //Will be changed to false
  // const [tokenExpire,setTokenExpire]=useState();
  // const [userId,setUserId]=useState(null);
  // const [imgId,setImgId]=useState(null);
  const [initializing, setInitializing] = useState(true);

  const [user, setUser] = useState();

  const login = useCallback((userData) => {
    setUser(userData);
    // const tokenExpireTime=expireTime || new Date(new Date().getTime()+1000*60*60);
    // setTokenExpire(tokenExpireTime);
    saveInAS('userData', JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    // setToken(null);
    // setTokenExpire(null);
    // setUserId(null);
    // setImgId(null);

    setUser(null);
    removeFromAS('userData');
  }, []);
  // useEffect(()=>{
  //   if(token && tokenExpire){
  //     const remainingTime=tokenExpire.getTime()-new Date().getTime();
  //     logoutTimer=setTimeout(logout,remainingTime);
  //   }else{
  //     clearTimeout(logoutTimer);
  //   }
  // },[token,logout,tokenExpire]);

  useEffect(() => {
    // console.log("Async",getFromAS('userData'))
    let data;
    const getUserData = async () => {
      data = await getFromAS('userData');
      // console.log('data', data);
      return data;
    };
    getUserData();

    const onAuthStateChanged = (userData) => {
      if (initializing) {
        setInitializing(false);
      }
      login(userData);
      setUser(userData);
    };

    if (data) {
      console.log('data', data);
      login(data);
    }
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [login, initializing]);
  return {user, initializing, login, logout};
};
