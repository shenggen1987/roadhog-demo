import React from 'react';
import styles from './MainLayout.css';
import Header1 from './Header';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import { connect } from 'dva';

function MainLayout({ children, location, collapsed, changeCollapsed }) {
 
  console.log(collapsed)
  return (

    <Layout>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={collapsed}
        >
          <div className="logo" />
          <Header1 location={location} />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={changeCollapsed}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
  );
}


// export default MainLayout;
function mapStateToProps(state) {
  return {
    collapsed: state.indexPage.collapsed
  };
}

export default connect(mapStateToProps)(MainLayout);
