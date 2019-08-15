import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
  render() {
    return (
      // {!success ? () : ()}
        <Form className="form">
          <div className="box_text">
            <h1>Регистрация</h1>
          </div>
          <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Логин"
              />
          </Form.Item>
          <Form.Item>
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="E-mail"
              />
          </Form.Item>
          <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Телефон"
              />
          </Form.Item>
          <Form.Item>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Пароль"
              />
          </Form.Item>
          <Form.Item>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Подтвердить пароль"
              />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" className="form-button">
              Зарегистрироваться
            </Button>
          </Form.Item>
            <div className="small_text">
              <p>Нажимая на кнопку вы даете согласие на обработку <Link to="/politic">персональных данных</Link></p>
            </div>
        </Form>
    );
  }
}

export default RegisterForm;