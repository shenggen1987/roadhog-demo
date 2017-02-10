import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './Header.css';
function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="inline"
      theme="dark"
    >
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars" /><span className="navText">Users</span></Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" /><span className="navText">Home</span></Link>
      </Menu.Item>
      <Menu.Item key="/orders">
        <Link to="/orders"><Icon type="shopping-cart" /><span className="navText">Orders</span></Link>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/page-you-dont-know"><Icon type="frown-circle" /><span className="navText">404</span></Link>
      </Menu.Item>
  
    </Menu>
  );
}

export default Header;
