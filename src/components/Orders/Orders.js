import React from 'react';
import { connect } from 'dva';
import styles from './Orders.css';
import { Form, Row, Col, Input, Button, Icon, Table } from 'antd';
const FormItem = Form.Item;
import Search from './Search';
import { routerRedux } from 'dva/router';

function Orders({dispatch, loading, list, total, page, status, query}) {
		const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };

    function createHandler(values) {
	    	
	    	dispatch(routerRedux.push({
					pathname: '/orders',
					query: values,
				}));
	  }
	  const columns = [{
		  title: '姓名',
		  dataIndex: 'name',
		  key: 'name',
		}, {
		  title: '年龄',
		  dataIndex: 'age',
		  key: 'age',
		}, {
		  title: '电话',
		  dataIndex: 'phone',
		  key: 'phone',
		}];
  return (


    <div className={styles.normal}>
      Component: Orders11
      <Search onOk={createHandler}  loading={loading} status={status} query={query} />
      <div className={styles.list}>
      	<Table dataSource={list} columns={columns} pagination={false} />
      </div>
    </div>
  );
}
function mapStateToProps(state) {
	const { loading, list, total, page, status, query } = state.orders;
  return {
  	loading: loading,
  	list: list,
  	total: total,
  	page: page,
  	status: status,
  	query: query
  };
}
export default connect(mapStateToProps)(Orders);
