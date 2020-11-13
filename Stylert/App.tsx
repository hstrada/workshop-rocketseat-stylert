import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {Card} from './src/components';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Card />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
