import { axiosRequest as request } from 'tote-box';
import { USER } from './urls';
import mock from './mock';

const req = request({
  timeout: 5000
}, {
  filterResponse(data) {
    if (data.status === 0) {
      return Promise.resolve(data.data);
    }

    return Promise.reject(new Error(data.message || 'Server Error'));
  },
  beautifyError(url, err) {
    return new Error(`Request api error, url: ${url}, message: ${err.message}`);
  }
});

export function fetchUser() {
  return req.get(USER);
}

if (process.env.NODE_ENV === 'development') {
  mock();  
}
