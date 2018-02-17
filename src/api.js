import axios from 'axios';

function createInstance() {
  const defaultConfig = {
    baseURL: 'http://localhost:3030',
  };

  const instance = axios.create(defaultConfig);

  instance.interceptors.request.use((config) => {
    const cfg = Object.assign({}, config);
    const token = window.localStorage.getItem('token');
    cfg.headers.Authorization = token || '';
    return cfg;
  });

  return instance;
}

export default createInstance();
