import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { Menu, Dropdown, Icon, Avatar, Col, Row } from 'antd';

const SiteNavigation: React.SFC<{}> = () => (
  <Row>
    <Col md={24} lg={0}>
      <Menu mode="horizontal">
        <Menu.Item>
          <Dropdown
            placement="bottomRight"
            overlay={
              <Menu>
                <Menu.Item>
                  <Link to="/app/home">Home</Link>
                </Menu.Item>
              </Menu>
            }
          >
            <div>
              <Icon type="appstore" />
            </div>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Col>
    <Col xs={0} sm={0} md={0} lg={24} xl={24} xxl={24}>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to="/app/home">electron-react-typescript</Link>
        </Menu.Item>

        <Menu.Item>
          <Link to="/app/home">Home</Link>
        </Menu.Item>

        <Menu.Item>
          <Dropdown
            placement="bottomCenter"
            overlay={
              <Menu>
                <Menu.Item>
                  <Link to="/">Something</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/">Everything</Link>
                </Menu.Item>
              </Menu>
            }
          >
            <div>
              Anything<Icon type="down" />
            </div>
          </Dropdown>
        </Menu.Item>

        <Menu.Item style={{ float: 'right' }}>
          <Dropdown
            placement="topRight"
            overlay={
              <Menu>
                <Menu.Item>
                  <Link to="/app/profile">
                    <Icon type="profile" /> Profile
                  </Link>
                </Menu.Item>

                <Menu.Item>
                  <Link to="/app/help">
                    <Icon type="book" /> Help
                  </Link>
                </Menu.Item>

                <Menu.Item>
                  <Link to="/login">
                    <Icon type="logout" /> Logout
                  </Link>
                </Menu.Item>
              </Menu>
            }
          >
            <Avatar
              size="large"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Col>
  </Row>
);

export { SiteNavigation };
