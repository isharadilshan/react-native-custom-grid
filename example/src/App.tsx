import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Row, Column } from 'react-native-custom-grid';

export default function App() {

  return (
    <View style={styles.container}>
      <Row size={4}>
        <Column sm={1} md={1}>
          <View style={{flex: 1,height: 200, backgroundColor: 'blue'}}/>
        </Column>
        <Column sm={2} md={2}>
          <View style={{flex: 1,height: 200, backgroundColor: 'red'}}/>
        </Column>
        <Column sm={1} md={1}>
          <View style={{flex: 1,height: 200, backgroundColor: 'blue'}}/>
        </Column>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
