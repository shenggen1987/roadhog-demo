
export default {
  namespace: 'indexPage',
  state: {
    collapsed: false,
  },
  reducers: {
    changeCollapsed(state, { payload: { collapsed } }) {
    	collapsed = !state.collapsed;
      return { ...state, collapsed};
    },
  }
};
