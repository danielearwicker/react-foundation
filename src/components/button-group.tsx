import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Breakpoints, ButtonGroupColors, ButtonGroupSizes } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues } from '../utils';

/**
 * Button group component.
 * http://foundation.zurb.com/sites/docs/button-group.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const ButtonGroup: React.StatelessComponent<ButtonGroupProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'button-group',
    props.className,
    props.color,
    props.size,
    {
      'expanded': props.isExpanded,
      'stacked-for-small': props.stackFor === Breakpoints.SMALL,
      'stacked-for-medium': props.stackFor === Breakpoints.MEDIUM,
      'stacked-for-large': props.stackFor === Breakpoints.LARGE,
      'stacked': props.isStacked
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(ButtonGroup.propTypes!));

  return <div {...passProps} className={className}/>;
};

export interface ButtonGroupProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
  color?: ButtonGroupColors;
  size?: ButtonGroupSizes;
  stackFor?: Breakpoints;
  isExpanded?: boolean;
  isStacked?: boolean;
};

ButtonGroup.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  color: PropTypes.oneOf(objectValues(ButtonGroupColors)),
  size: PropTypes.oneOf(objectValues(ButtonGroupSizes)),
  stackFor: PropTypes.oneOf(objectValues(Breakpoints)),
  isExpanded: PropTypes.bool,
  isStacked: PropTypes.bool
};
