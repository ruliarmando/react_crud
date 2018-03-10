import api from '../api';

export default {
  state: {
    items: [],
    error: null,
    paging: {
      limit: 10,
      total: 0,
      skip: 0,
    },
  },
  reducers: {
    loadSuccess(state, payload) {
      return {
        ...state,
        items: payload.data,
        paging: {
          limit: payload.limit,
          skip: payload.skip,
          total: payload.total,
        },
      };
    },
    loadFailed(state, payload) {
      return {
        ...state,
        error: payload,
      };
    }
  },
  effects: {
    load({ limit = 10, skip = 0 } = {}) {
      return api.get(`/students?$limit=${limit}&$skip=${skip}`)
        .then(result => this.loadSuccess(result.data))
        .catch(err => this.loadFailed(err));
    },
    save({ data }) {
      return api.post('/students', data)
        .then(result => console.log(result.data))
        .catch(err => console.error(err));
    },
    update({ id, data }) {
      return api.put(`/students/${id}`, data)
        .then(result => console.log(result.data))
        .catch(err => console.error(err));
    },
    remove({ id }) {
      return api.delete(`/students/${id}`)
        .then(result => console.log(result.data))
        .catch(err => console.error(err));
    }
  }
}
