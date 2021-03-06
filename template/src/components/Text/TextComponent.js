import React from 'react';
import {Text} from 'react-native';
import {colors, fonts, sizes} from '@baseStyle';
import {string, number, oneOfType} from 'prop-types';
import {strings} from '../../translation/i18n';
const TextComponent = ({
  i18n,
  value,
  content,
  family,
  weight,
  size,
  color,
  style,
  styles,
  align,
  children,
}) => {
  return (
    <Text
      style={{
        fontFamily: family,
        color: color,
        fontSize: size,
        fontWeight: weight,
        fontStyle: style,
        textAlign: align,
        ...styles,
      }}>
      {i18n ? strings(i18n, value) : content}
      {children}
    </Text>
  );
};

TextComponent.defaultProps = {
  content: '',
  family: fonts.regular,
  color: colors.text,
  size: sizes.fs14,
  align: 'left',
  weight: 'normal',
  style: 'normal',
};

TextComponent.propTypes = {
  content: string.isRequired,
  family: string,
  color: string,
  size: number,
  align: string,
  weight: oneOfType([string, number]),
  style: string,
};

export default TextComponent;
