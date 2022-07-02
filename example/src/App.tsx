import * as React from 'react';
import {Text} from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Row, Column } from 'react-native-custom-grid';

export default function App() {

  return (
    <View style={styles.container}>
      <Row size={6}>
        <Column sm={1} md={1}>
          <View>
          <Text>this is text</Text>
          </View>
        </Column>
        <Column sm={2} md={2}>
        <View>
          <Text>this is text</Text>
          </View>
        </Column>
        <Column sm={1} md={1}>
        <View>
          <Text>this is text</Text>
          </View>
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
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
