import {
  appStatusFetching,
  appStatusFailed,
  appStatusReset,
} from '../redux/actions/statusAction';

import Axios from './axiosInstance';
import {getFromLS} from '../helpers/service';

export const http_request = async (
  dispatch,
  url,
  method = 'GET',
  body = {},
  checkToken = true,
  headers = {},
  message = {success: '', failure: ''},
) => {
  let data = 'Mango';

  let authHeader = {};

  let token;

  try {
    // Set status to fetching
    if (dispatch) {
      dispatch(appStatusFetching('Please Wait...'));
    }

    if (checkToken) {
      if (getFromLS('token')) {
        token = getFromLS('token');

        authHeader = {
          // "Content-Type": "application/x-www-form-urlencoded",
          'Content-Type': 'application/json',
          // "Accept": "application/json",
          Authorization: `Bearer ${token}`,
        };
      } else {
        dispatch(appStatusFailed('Token expired!'));
        return;
      }
    }

    switch (method) {
      case 'GET':
        data = await Axios.get(url, {
          headers: {
            ...headers,
            ...authHeader,
          },
        });
        break;
      case 'POST':
        console.log('POST request', body);
        data = await Axios.post('http://localhost:5000/users/login', body, {
          headers: {
            ...headers,
            ...authHeader,
          },
        });
        break;
      case 'PUT':
        data = await Axios.put(url, body, {
          headers: {
            ...headers,
            ...authHeader,
          },
        });
        break;
      case 'DELETE':
        data = await Axios.delete(url, {
          headers: {
            ...headers,
            ...authHeader,
          },
        });
        break;
      default:
        data = await Axios.get(url, {
          headers: {
            ...headers,
            ...authHeader,
          },
        });
        break;
    }
  } catch (err) {
    if (dispatch) {
      dispatch(appStatusFailed(`Some error occured : ${err}`));
    }

    console.warn(
      `An error occured while requesting a url : ${url} \n Error: ${err}`,
    );
  } finally {
    console.log(data);
    if (!data) {
      if (dispatch) {
        dispatch(
          appStatusFailed(
            data.message || (message && message.failure) || 'Request failed',
          ),
        );
      }
    } else {
      if (dispatch) {
        dispatch(appStatusReset());
      }
      return data.data;
    }
  }
};
