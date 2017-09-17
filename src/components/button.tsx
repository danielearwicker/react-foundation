import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ButtonSizes, ButtonColors } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues } from '../utils';

/**
 * Button property types.
 *
 * @type {Object}
 */
const ButtonPropTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  color: PropTypes.oneOf(objectValues(ButtonColors)),
  size: PropTypes.oneOf(objectValues(ButtonSizes)),
  isHollow: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isDropdown: PropTypes.bool
};

export interface ButtonPropsCommon extends FlexboxPropTypes {
  size?: ButtonSizes;
  isHollow?: boolean;
  isExpanded?: boolean;
  isDisabled?: boolean;
  isDropdown?: boolean;
  isArrowOnly?: boolean;
}

export interface ButtonProps extends ButtonPropsCommon, React.HTMLAttributes<HTMLDivElement> {
  color?: ButtonColors;  
}

/**
 * Button component.
 * http://foundation.zurb.com/sites/docs/button.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Button: React.StatelessComponent<ButtonProps> = (props) => {
  const passProps = removeProps(props, objectKeys(Button.propTypes!));

  return <button {...passProps} className={createButtonClassName(props)}/>;
};

Button.propTypes = ButtonPropTypes;

export interface LinkProps extends ButtonPropsCommon, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: ButtonColors;  
}

/**
 * Link button component.
 * http://foundation.zurb.com/sites/docs/button.html#basics
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Link: React.StatelessComponent<LinkProps> = (props) => {
  const passProps = removeProps(props, objectKeys(Button.propTypes!));

  return <a {...passProps} className={createButtonClassName(props)}/>;
};

Link.propTypes = ButtonPropTypes;

/**
 * Creates button class name from the given properties.
 *
 * @param {Object} props
 * @returns {string}
 */
function createButtonClassName(props: ButtonProps) {
  return createClassName(
    props.noDefaultClassName ? null : 'button',
    props.className,
    props.size,
    props.color,
    {
      'hollow': props.isHollow,
      'expanded': props.isExpanded,
      'disabled': props.isDisabled,
      'dropdown': props.isDropdown,
      'arrow-only': props.isArrowOnly
    },
    generalClassNames(props)
  );
}
