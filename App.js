
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';

import { Provider } from 'react-redux'
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}

