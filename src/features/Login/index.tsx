import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import { Row, Col, Form, Input, Button } from 'antd';

const Login: React.SFC<{}> = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <style>{`
      html, body, #app, #app > div {
        height: 100%
      }
    `}</style>
    <div style={{ width: '500px', padding: '25px', border: 'solid lightblue 1px' }}>
      <h2>Login to Acme</h2>
      <Form>
        <Form.Item>
          <Input placeholder="E-mail address" size="large" />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Password" type="password" size="large" />
        </Form.Item>
        <Route
          render={({ history }) => (
            <Button onClick={() => history.push('/app')} size="large" type="primary">
              Login
            </Button>
          )}
        />
      </Form>
      <br />
      <Link to="/">Forgot Password</Link>
    </div>
  </div>
);

export { Login };
