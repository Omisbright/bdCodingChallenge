import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/state-management/store';
import MyTab from './src/navigation/main-navigation';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

export default function App() {

  const CustomStatusBar = ({backgroundColor, barStyle = 'dark-content'}) => {

    const insets = useSafeAreaInsets();
  
    return (
      <View style={{height: insets.top, backgroundColor}}>
        <StatusBar
          barStyle={barStyle}
          animated={true}
          backgroundColor={backgroundColor}
        />
      </View>
    )
  }

  return (
    <SafeAreaProvider>
      <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
          <NavigationContainer>
            <CustomStatusBar backgroundColor="#fff"/>
            <MyTab />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
