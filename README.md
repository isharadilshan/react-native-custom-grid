# React Native Custom Grid

A framework that makes building responsive React Native user interfaces easier by bringing over concepts from web development.

## Installation

This package is only **compatible with RN >= 0.52** since older versions do not support percentage-based widths AND the
correct prop-types for views. To install the latest version simply run:

```bash
yarn add react-native-custom-grid
```

Alternatively, if you prefer using `npm`:

```bash
npm install --save react-native-custom-grid
```

## Motivation

Even though React Native offers a faster way to build complex native applications, creating responsive RN UIs is significantly more difficult than compared to web development. This difficulty was somewhat mitigated when percentage-based widths landed. However, responsive RN UIs still require the use of many conditional renderings and size-specific overrides. RNRL brings over the good parts from web development in order to simplify native development.

React Native Custom Grid offers the ability to specify **different element sizes and styles or even swap entire components depending on target size**. This makes responsive UI development for RN as simple as using Bootstrap's grid system.

### Size Classes

Based on popular screen sizes, target sizes are as follows:

| Prefix | Breakpoint | Example Devices                    |
| ------ | ---------- | ---------------------------------- |
| sm     | <= 768 px  | phones - portrait                  |
| md     | <= 1024 px | tablets, phones - landscape        |
| lg     | > 1024 px  | tablets - landscape, large tablets |

## Examples

### Usage

```jsx
<View style={styles.container}>
  <Row size={6}>
    <Column sm={1} md={1}>
      <View>
        <Text>Left Column</Text>
      </View>
    </Column>
    <Column sm={2} md={2}>
      <View>
        <Text>Middle Column</Text>
      </View>
    </Column>
    <Column sm={1} md={1}>
      <View>
        <Text>Right Column</Text>
      </View>
    </Column>
  </Row>
</View>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
