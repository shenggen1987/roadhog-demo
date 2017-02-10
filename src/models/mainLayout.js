
export default {
  namespace: 'mainLayout',
  state: {
    collapsed: null,
  },
  reducers: {
    save(state, { payload: { collapsed } }) {
      return { ...state, collapsed};
    },
  }
};
