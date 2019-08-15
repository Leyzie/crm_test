import React from 'react';
import { Form, Icon, Input, Button} from 'antd';
import { Link } from 'react-router-dom';


const LoginForm = () => {
  return (
    <Form className="form">
        <div className="box_text">
          <h1>Авторизация</h1>
        </div>
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Логин или email"
              size="large"
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              size="large"
              placeholder="Пароль"
            />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" htmlType="submit" className="form-button">
            Авторизоваться
          </Button>
        </Form.Item>
        
        <Link className="link" to="/register">За регистрироваться</Link>
        <div className="small_text">
          <small><Link className="link" to="/register">Востановть пароль</Link></small>
        </div>
      </Form>
  );
};


export default LoginForm;