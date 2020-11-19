import React from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Card} from './src/components';
import {stylertTheme} from './src/theme';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <ThemeProvider theme={stylertTheme}>
            <Card amount="R$ 100,00" status="EM_ANDAMENTO" />
            <Card amount="R$ 5,00" status="PAGO" />
            <Card amount="R$ 20,00" status="EM_ATRASO" />
            <Card amount="R$ 50,00" status="REVERTIDO" />
          </ThemeProvider>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
