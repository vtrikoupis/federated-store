import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';

const RemoteApp = React.lazy(() => import('app2/RemoteApp'));

const App = () => {
  return (
    <Provider store={store}>
      <div>
        Welcome to Host App
        <div>
          <Suspense fallback="Loading...">
            <RemoteApp store={store} />
          </Suspense>
        </div>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
