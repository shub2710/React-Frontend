import React from 'react'
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;


export default ({collapsed, loanHistory, selectHistoryItem}) =>{
    console.log(loanHistory)
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" > </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}  style={{ height: 400, maxHeight: 400,overflowY: 'scroll', overflowX: 'hidden'}}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>loan History</span>
          </Menu.Item>
          {loanHistory && loanHistory.length > 0 && loanHistory.map((detail,loanKey) =>{
              return  <Menu.Item key={`${loanKey}:${detail.principal.amount}-${detail.numPayments}/${detail.interestRate}`} onClick={()=> selectHistoryItem(detail)}>
                    <Icon type="smile" />
                    <span>${detail.principal.amount}/{detail.numPayments}</span>
                </Menu.Item>
          })}
          
         
        </Menu>
      </Sider>
    )
}