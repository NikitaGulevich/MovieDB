import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import IndexPage from './components/IndexPage';
import MovieDetail from './components/MovieDB/MovieDetail';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store = {store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={IndexPage}/>
            <Route exact path='/:id' component={MovieDetail}/>
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);


