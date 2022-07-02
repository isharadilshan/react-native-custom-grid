import React from 'react';
import { StyleProp,StyleSheet, View, ViewStyle } from 'react-native';
import { screenSize } from '../../utils/ScreenSize';
import {
  isHidden,
  getComponentWidth,
  getComponentOffset,
} from '../../utils/Helper';

export type ColumnProps = {
  sm?: number,
  smOffset?: number,
  smHidden?: boolean,
  md?: number,
  mdOffset?: number,
  mdHidden?: boolean,
  lg?: number,
  lgOffset?: number,
  lgHidden?: boolean,
  rowSize?: number,
  style?: StyleProp<ViewStyle>,
  children?: any,
};

const Column: React.FunctionComponent<ColumnProps> = ({
  sm,
  smOffset,
  smHidden,
  md,
  mdOffset,
  mdHidden,
  lg,
  lgOffset,
  lgHidden,
  rowSize,
  style,
  children,
}) => {
  const gridProps = {
    sm,
    smOffset,
    smHidden,
    md,
    mdOffset,
    mdHidden,
    lg,
    lgOffset,
    lgHidden,
    rowSize,
  };

  if (isHidden(screenSize, gridProps)) {
    return null;
  } else {
    return (
      <View
        style={StyleSheet.flatten([
          style,
          {
            flexDirection: 'column',
            width: getComponentWidth(screenSize, gridProps),
            marginLeft: getComponentOffset(screenSize, gridProps),
          },
        ])}
      >
        {children}
      </View>
    );
  }
};

export default Column;
