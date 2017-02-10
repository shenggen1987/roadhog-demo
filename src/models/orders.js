import * as usersService from '../services/orders';

export default {
  namespace: 'orders',
  state: {
  	loading: false,
  	list: [],
    total: null,
    page: null,
    status: [],
    query: {}
  },
  reducers: {
  	search(state, { payload: { ...dd } }) {
      return { ...state, ...dd};
    },
  },
  effects: {
  	*fetch({ payload: { page = 1, ...query } }, { call, put }) {

      const { data, headers } = yield call(usersService.fetch, { page });
      const condition = yield call(usersService.condition);
      yield put({
        type: 'search',
        payload: {
          list: data.data,
          total: data.total,
          page: parseInt(page, 10),
          status: condition.data.data.status,
          query: query
        },
      });
    },
  },
  subscriptions: {
  	setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
      	console.log(query);
        if (pathname === '/orders') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
