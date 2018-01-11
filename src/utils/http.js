import Axios from 'axios'

Axios.defaults.timeout = 45000; // 45s

Axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
        
          break;
        default:
          
      }
    } else if (error instanceof Error) {
      console.error(error.message);
    } else {

    }

    return Promise.reject(error.response.data);
  });

  export default Axios;