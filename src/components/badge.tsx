import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BadgeColors } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues } from '../utils';

/**
 * Badge component.
 * http://foundation.zurb.com/sites/docs/badge.html
 */
export const Badge: React.StatelessComponent<BadgeProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'badge',
    props.className,
    props.color,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Badge.propTypes!));

  return <span {...passProps} className={className}/>;
};

export interface BadgeProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColors;
};

Badge.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  color: PropTypes.oneOf(objectValues(BadgeColors))
};
