import React from 'react';
import { View, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { screenSize } from '../../utils/ScreenSize';
import { isHidden } from '../../utils/Helper';

const cloneElements = (size: number, children: any) => {
  return React.Children.map(children, (element) => {
    return React.cloneElement(element, { rowSize: size });
  });
};

export type RowProps = {
  size?: number,
  noWrap?: boolean,
  smHidden?: boolean,
  mdHidden?: boolean,
  lgHidden?: boolean,
  style?: StyleProp<ViewStyle>,
  children?: any,
};

const Row: React.FunctionComponent<RowProps> = ({
  size = 12,
  noWrap,
  smHidden,
  mdHidden,
  lgHidden,
  style,
  children,
}) => {
  const gridProps = {
    smHidden,
    mdHidden,
    lgHidden,
  };

  if (isHidden(screenSize, gridProps)) {
    return null;
  } else {
    return (
      <View
        style={StyleSheet.flatten([
          style,
          {
            flexDirection: 'row',
            flexWrap: noWrap ? 'nowrap' : 'wrap',
          },
        ])}
      >
        {cloneElements(size, children)}
      </View>
    );
  }
};

export default Row;

