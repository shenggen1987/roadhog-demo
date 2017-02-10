import React from 'react';
import { connect } from 'dva';
import styles from './Orders.css';
import OrdersComponent from '../components/Orders/Orders';
import MainLayout from '../components/MainLayout/MainLayout';

function Orders({ dispatch,location }) {
	const siderProps = {
    changeCollapsed(collapsed){
      dispatch({
        type: 'indexPage/changeCollapsed',
        payload: { collapsed },
      });
    }
  }

  return (
    <MainLayout location={location} {...siderProps}>
      <OrdersComponent />
    </MainLayout>
  );
}

function mapStateToProps(state) {
  return {
    collapsed: state.indexPage.collapsed
  };
}

export default connect(mapStateToProps)(Orders);
