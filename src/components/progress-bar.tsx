import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ProgressColors } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues } from '../utils';

/**
 * Progress component.
 * http://foundation.zurb.com/sites/docs/progress-bar.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Progress: React.StatelessComponent<PaginationProps> = (props) => {
  const { meter: meterProps = { text: "" } } = props;

  const className = createClassName(
    props.noDefaultClassName ? null : 'progress',
    props.className,
    props.color,
    generalClassNames(props)
  );

  if (props.value) {
    meterProps.style = meterProps.style || {};
    meterProps.style.width = `${props.value}%`;
  }

  const passProps = removeProps(props, objectKeys(Progress.propTypes!));

  return (
    <div {...passProps}
      className={className}
      role="progressbar"
      aria-valuemin={props.min}
      aria-valuemax={props.max}
      aria-valuenow={props.value}
      aria-valuetext={props.valueText}>
      {meterProps.text ? <ProgressMeterWithText {...meterProps} /> : <ProgressMeter {...meterProps} />}
    </div>
  );
};

export interface PaginationProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> { 
  min?: number;
  max?: number;
  value?: number;
  color?: ProgressColors;
  valueText?: string;
  meter?: ProgressMeterWithTextProps;
};

Progress.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  color: PropTypes.oneOf(objectValues(ProgressColors))
};

/**
 * Progress meter sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const ProgressMeter: React.StatelessComponent<ProgressMeterProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'progress-meter',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(ProgressMeter.propTypes!));

  return <div {...passProps} className={className}/>;
};

export interface ProgressMeterProps extends GeneralPropTypes, React.HTMLAttributes<HTMLDivElement> { }

ProgressMeter.propTypes = {
  ...GeneralPropTypes
};

/**
 * Progress meter with text sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const ProgressMeterWithText: React.StatelessComponent<ProgressMeterWithTextProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'progress-meter',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(ProgressMeterWithText.propTypes!));

  return (
    <span {...passProps} className={className}>
      <ProgressMeterText>{props.text}</ProgressMeterText>
    </span>
  );
};

export interface ProgressMeterWithTextProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLSpanElement> { 
  text: string;
}

ProgressMeterWithText.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  text: PropTypes.string.isRequired
};

/**
 * Progress meter text sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const ProgressMeterText: React.StatelessComponent<ProgressMeterTextProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'progress-meter-text',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(ProgressMeterText.propTypes!));

  return <p {...passProps} className={className}/>;
};

export interface ProgressMeterTextProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLParagraphElement> { 
  children?: string;
}

ProgressMeterText.propTypes = {
  ...GeneralPropTypes
};

/**
 * Native progress component.
 * http://foundation.zurb.com/sites/docs/progress-bar.html#native-progress
 *
 * @returns {Object}
 */
export const NativeProgress: React.StatelessComponent<NativeProgressProps> = (props) => {
  const className = createClassName(
    props.className,
    props.color,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(NativeProgress.propTypes!));

  return <progress {...passProps} max={props.max} value={props.value} className={className}/>;
};

export interface NativeProgressProps extends FlexboxPropTypes, React.ProgressHTMLAttributes<HTMLProgressElement> {
  max?: number;
  value?: number;
  color?: ProgressColors;
};

NativeProgress.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  max: PropTypes.number,
  value: PropTypes.number,
  color: PropTypes.oneOf(objectValues(ProgressColors))
};

// TODO: Consider adding support for native meter.
