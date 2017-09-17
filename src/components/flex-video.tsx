import * as React from 'react';
import * as PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

export interface FlexVideoProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
  isWidescreen?: boolean;
  isVimeo?: boolean;
}

/**
 * FlexVideo component.
 * http://foundation.zurb.com/sites/docs/flex-video.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const FlexVideo: React.StatelessComponent<FlexVideoProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'flex-video',
    props.className,
    {
      widescreen: props.isWidescreen,
      vimeo: props.isVimeo
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(FlexVideo.propTypes!));

  return <div {...passProps} className={className}/>;
};

FlexVideo.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isWidescreen: PropTypes.bool,
  isVimeo: PropTypes.bool
};
