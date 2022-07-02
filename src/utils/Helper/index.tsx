const isHidden = (screenSize: string, gridProps: any) => {
  switch (screenSize) {
    case 'small':
      return gridProps?.smHidden ? true : false;
    case 'medium':
      return gridProps?.mdHidden ? true : false;
    case 'large':
      return gridProps?.lgHidden ? true : false;
    default:
      return false;
  }
};

const toPercent = (num: number) => num * 100 + '%';

const getComponentWidth = (screenSize: string, gridProps?: any) => {
  switch (screenSize) {
    case 'small':
      if (gridProps?.sm) {
        return toPercent(gridProps?.sm / gridProps?.rowSize);
      } else {
        return gridProps?.parentWidth;
      }
    case 'medium':
      if (gridProps?.md) {
        return toPercent(gridProps?.md / gridProps?.rowSize);
      } else if (gridProps?.sm) {
        return toPercent(gridProps?.sm / gridProps?.rowSize);
      } else {
        return gridProps?.parentWidth;
      }
    case 'large':
      if (gridProps?.lg) {
        return toPercent(gridProps?.lg / gridProps?.rowSize);
      } else if (gridProps?.md) {
        return toPercent(gridProps?.md / gridProps?.rowSize);
      } else if (gridProps?.sm) {
        return toPercent(gridProps?.sm / gridProps?.rowSize);
      } else {
        return gridProps?.parentWidth;
      }
    default:
      return gridProps?.parentWidth;
  }
};

const getComponentOffset = (screenSize: string, gridProps?: any) => {
  switch (screenSize) {
    case 'small':
      if (gridProps?.smOffset) {
        return toPercent(gridProps?.smOffset / gridProps?.rowSize);
      } else {
        return 0;
      }
    case 'medium':
      if (gridProps?.mdOffset) {
        return toPercent(gridProps?.mdOffset / gridProps?.rowSize);
      } else if (gridProps?.smOffset) {
        return toPercent(gridProps?.smOffset / gridProps?.rowSize);
      } else {
        return 0;
      }
    case 'large':
      if (gridProps?.lgOffset) {
        return toPercent(gridProps?.lgOffset / gridProps?.rowSize);
      } else if (gridProps?.mdOffset) {
        return toPercent(gridProps?.mdOffset / gridProps?.rowSize);
      } else if (gridProps?.smOffset) {
        return toPercent(gridProps?.smOffset / gridProps?.rowSize);
      } else {
        return 0;
      }
    default:
      return 0;
  }
};

export { isHidden, getComponentWidth, getComponentOffset };