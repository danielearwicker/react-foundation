import * as React from 'react';
import * as PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * Reveal component.
 * http://foundation.zurb.com/sites/docs/reveal.html
 *
 * @param {Object} props
 * @returns {Object}
 */

export const Reveal: React.StatelessComponent<PaginationProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'reveal',
    props.className,
    {
      'tiny': props.isTiny,
      'small': props.isSmall,
      'large': props.isLarge,
      'full': props.isFullscreen
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Reveal.propTypes!));

  return <div {...passProps} className={className} data-reveal/>;
};

export interface PaginationProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
  isTiny?: boolean;
  isSmall?: boolean;
  isLarge?: boolean;
  isFullscreen?: boolean;
};

Reveal.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isTiny: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isFullscreen: PropTypes.bool
};
