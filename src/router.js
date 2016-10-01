// Libs
import React from 'react'
import {Router, Route, IndexRedirect,browserHistory} from 'react-router'



// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import HTML from './components/courses/HTML';
import CSS from './components/courses/CSS';
import Javascript from './components/courses/Javascript';
import Teachers from './components/Teachers';
import NotFound from './components/NotFound';

const routes = (
  <Router history={browserHistory}>
    <Route  component={App}>
      <Route path="/" component={Home}/>
      <Route path="about" component={About}/>
      <Route path="teachers" component={Teachers}/>
      <Route path="courses" component={Courses}>
        <Route path="html" component={HTML}/>
        <Route path="css" component={CSS}/>
        <Route path="javascript" component={Javascript}/>
        <IndexRedirect to="html" />
      </Route>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

export default routes;
