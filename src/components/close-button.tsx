import * as React from 'react';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * Close button component.
 * http://foundation.zurb.com/sites/docs/close-button.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const CloseButton: React.StatelessComponent<CloseButtonProps> = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'close-button',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(CloseButton.propTypes!));

  return <button {...passProps} className={className}/>;
};

export interface CloseButtonProps extends FlexboxPropTypes, React.ButtonHTMLAttributes<HTMLButtonElement> { }
  
CloseButton.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};
