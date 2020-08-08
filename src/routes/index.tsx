import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import { Container } from './styles';
import Home from '../pages/Landing';
import TeacherForm from '../pages/TeacherForm';
import TeacherList from '../pages/TeacherList';

const DefaultRouter: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/study" component={TeacherList} />
    <Route path="/give-classes" component={TeacherForm} />
  </BrowserRouter>
);

export default DefaultRouter;
