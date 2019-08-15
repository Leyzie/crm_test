import React from "react";
import { Route } from "react-router-dom";

import { LoginForm, RegisterForm } from "../../modules";
import { Block } from '../../components'

const Auth = () => (
  <section className="auth">
      <h1 className="namecompany">CRM Company</h1>
      <Block>
        <Route exact path={["/", "/login"]} component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
      </Block>
  </section>
);

export default Auth;