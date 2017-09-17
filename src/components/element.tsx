import * as React from 'react';
import * as PropTypes from 'prop-types';
import { createClassName, generalClassNames, GeneralPropTypes, FlexboxPropTypes, removeProps, objectKeys } from '../utils';

/**
 * Div component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Block: React.StatelessComponent<BlockProps> = (props) => {
  const passProps = removeProps(props, objectKeys(Block.propTypes!));

  return <div {...passProps} className={createClassName(props.className, generalClassNames(props))}/>;
};

export interface BlockProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> { }

Block.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};

/**
 * Span component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Inline: React.StatelessComponent<InlineProps> = (props) => {
  const passProps = removeProps(props, objectKeys(Inline.propTypes!));

  return <span {...passProps} className={createClassName(props.className, generalClassNames(props))}/>;
};

export interface InlineProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLSpanElement> { }

Inline.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};
