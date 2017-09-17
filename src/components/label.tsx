import * as React from 'react';
import * as PropTypes from 'prop-types';
import { LabelColors } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues } from '../utils';

/**
 * Label component.
 * http://foundation.zurb.com/sites/docs/label.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Label: React.StatelessComponent<LabelProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'label',
    props.className,
    props.color,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Label.propTypes!));

  return <span {...passProps} className={className}/>;
};

export interface LabelProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLSpanElement> { 
  color?: LabelColors;
};

Label.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  color: PropTypes.oneOf(objectValues(LabelColors))
};
