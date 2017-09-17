import * as React from 'react';
import * as PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * Icon component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Icon: React.StatelessComponent<IconProps> = (props) => {
  const className = createClassName(
    props.prefix,
    props.prefix ? `${props.prefix}-${props.name}` : props.name,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Icon.propTypes!));

  return <i {...passProps} className={className}/>;
};

export interface IconProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLElement> { 
  name: string;
  prefix?: string;
};

Icon.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  name: PropTypes.string.isRequired,
  prefix: PropTypes.string
};
