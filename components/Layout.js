import { Layout, Menu, Icon } from 'antd';

import React, {useState} from 'react'

const { Header, Sider, Content } = Layout;

import SideMenu from './Menu'

export default ({children,loanHistory, selectHistoryItem}) =>{

const [collapsed, setCollapsed] = useState(false)

    return (
        <Layout>
            {
                // Side Menu
            }
                <SideMenu collapsed={collapsed} loanHistory={loanHistory} selectHistoryItem={selectHistoryItem}/> 
            <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={()=>setCollapsed(!collapsed)}
            />
            React Front End 
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {children}
          </Content>
          </Layout>
      </Layout>
    )
}