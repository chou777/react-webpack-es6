import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

require('./layout.less');

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class AntLayout extends React.Component {
  state = {
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="data-operation">
        <header className="header">
          <div className="header__logo">
            Logo
          </div>
          <nav className="header__nav">
            <ul>
              <li><a href="#">Menu1</a></li>
              <li><a href="#">Menu1</a></li>
              <li><a href="#">Menu1</a></li>
            </ul>
          </nav>
          <div className="header__user-menu">
            <Dropdown overlay={menu} placement="bottomRight">
              <Icon className="user-icon" type="user" />
            </Dropdown>
          </div>
        </header>
        <div className="sub-header">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <Icon type="mail" />Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled>
              <Icon type="appstore" />Navigation Two
            </Menu.Item>
            <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
            </Menu.Item>
          </Menu>
        </div>
        <div className="main">
          <div className="content">
            {this.props.children}
          </div>
        </div>
        <footer className="footer">footer</footer>
      </div>
    );
  }
}

export default AntLayout;

