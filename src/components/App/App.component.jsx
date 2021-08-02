import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../../pages/Home';
import VideoDetail from '../../pages/VideoDetail';
import Header from '../Header';
import Layout from '../Layout';

function App() {
  const [searchText, setSearchText] = useState('coldplay');
  return (
    <Router>
      <Layout>
        <Header handleInputChange={setSearchText} />
        <Switch>
          <Route path="/" exact>
            <HomePage text={searchText} />
          </Route>
          <Route path="/:id">
            <VideoDetail />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
