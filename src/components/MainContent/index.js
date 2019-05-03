import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../../containers/Dashboard';
import ChatWindow from '../../containers/ChatWindow';
import Login from '../Login/Login';
import UnmatchedPath from '../UnmatchedPath';
import ProtectedRoute from '../ReusableComponents/ProtectedRoute';
import './MainContent.scss';

const MainContent = () => (
  <main>
    <Switch>
      <ProtectedRoute exact path="/" component={Dashboard} />
      <ProtectedRoute exact path="/chat-window" component={ChatWindow} />
      <Route exact path="/login" component={Login} />
      <Route path="*" component={UnmatchedPath} />
    </Switch>
  </main>
);
export default MainContent;
