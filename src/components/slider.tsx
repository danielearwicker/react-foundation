import * as React from 'react';
import { Component } from 'react';
import * as classNames from 'classnames';

// TODO: Add support for changing the values.

/**
 * Slider component.
 * http://foundation.zurb.com/sites/docs/slider.html
 */
export class Slider extends Component<SliderProps, SliderState> {
  constructor() {
    super();

    this.state = { value: 0 };
  }

  componentWillMount() {
    this.setState({ value: this.props.initialStart || 0 });
  }

  render() {
    const { handle: handleProps, fill: fillProps } = this.props;

    return (
      <div {...this.props} className={classNameFromProps(this.props)}>
        <SliderHandle {...handleProps}/>
        <SliderFill {...fillProps}/>
      </div>
    );
  }
}

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement>, SliderCommonProps {  
  initialStart?: number;
  fill?: SliderFillProps;
  handle?: React.CSSProperties;
};

export interface SliderState {
  value: number;
}

/**
 * Two-handle slider component.
 * http://foundation.zurb.com/sites/docs/slider.html#two-handles
 */
export class TwoHandleSlider extends Component<TwoHandleSliderProps, TwoHandleSliderState> {
  constructor() {
    super();

    this.state = { minValue: 0, maxValue: 100 };
  }

  componentWillMount() {
    this.setState({
      minValue: this.props.initialStart || 0,
      maxValue: this.props.initialEnd || 100
    });
  }

  render() {
    const { minHandle: minHandleProps, maxHandle: maxHandleProps, fill: fillProps } = this.props;

    return (
      <div {...this.props} className={classNameFromProps(this.props)}>
        <SliderHandle {...minHandleProps}/>
        <SliderHandle {...maxHandleProps}/>
        <SliderFill {...fillProps}/>
      </div>
    );
  }
}

export interface TwoHandleSliderProps extends React.HTMLAttributes<HTMLDivElement>, SliderCommonProps {
  initialStart?: number;
  initialEnd?: number;
  minHandle?: React.CSSProperties;
  maxHandle?: React.CSSProperties;
  fill?: SliderFillProps;
};

export interface TwoHandleSliderState {
  minValue: number;
  maxValue: number;
}

/**
 * Slider handle sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const SliderHandle: React.StatelessComponent<SliderHandle> = props => {
  return (
    <span>
      <span {...props} role="slider"/>
      <input type="hidden"/>
    </span>
  );
};

export interface SliderHandle extends React.HTMLAttributes<HTMLSpanElement> { }

export interface SliderFillProps {
  className?: string;
}

/**
 * Slider fill sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const SliderFill: React.StatelessComponent<SliderFillProps> = props => (
  <span className={props.className || 'slider-fill'}/>
);

export interface SliderCommonProps {
  className?: string;
  isVertical?: boolean;
  isDisabled?: boolean;
}

/**
 * Creates the slider class name from the given properties.
 * This method allows us to share code between the `Slider` and `TwoHandleSlider` components.
 *
 * @param {Object} props
 * @returns {string}
 */
function classNameFromProps(props: SliderCommonProps) {
  return classNames(
    props.className || 'slider',
    {
      'vertical': props.isVertical,
      'disabled': props.isDisabled
    }
  );
}
