import * as React from 'react';
import { Component } from 'react';
import * as PropTypes from 'prop-types';
import { TopBar, TopBarProps } from './top-bar';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps } from '../utils';

// Default pixel value when title bar is displayed and top bar is hidden.
const DEFAULT_BREAKPOINT = 640;

/**
 * Responsive navigation component.
 * http://foundation.zurb.com/sites/docs/responsive-navigation.html
 */
export class ResponsiveNavigation extends Component<ResponsiveNavigationProps, ResponsiveNavigationState> {
  constructor() {
    super();

    this.state = {
      isTitleBarVisible: true,
      isTopBarVisible: false
    };

    this.update = this.update.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    this.update();
  }

  componentDidMount() {
    window.addEventListener('resize', this.update);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.update);
  }

  /**
   * Updates the state of this component.
   * While this might seem like a sub-optimal solution, it is actually the only solution.
   * Using 'hide' and 'show' -classes won't work because they set display with `!important`.
   */
  update() {
    const { breakpoint } = this.props;

    this.setState({
      isTitleBarVisible: window.innerWidth < breakpoint!,
      isTopBarVisible: window.innerWidth >= breakpoint!
    });
  }

  /**
   * Called when the menu icon is clicked.
   */
  toggle() {
    this.setState({
      isTopBarVisible: !this.state.isTopBarVisible
    });
  }

  render() {
    const {
      isTitleBarVisible,
      isTopBarVisible
    } = this.state;

    const {
      titleBar: titleBarProps = {},
      menuIcon: menuIconProps = {},
      titleBarTitle: titleBarTitleProps = {},
      topBar: topBarProps = {},
      children
    } = this.props;

    return (
      <div {...removeProps(this.props, ['breakpoint'])}>
        <TitleBar {...titleBarProps} isHidden={!isTitleBarVisible}>
          <MenuIcon {...menuIconProps} onClick={this.toggle}/>
          <TitleBarTitle {...titleBarTitleProps}/>
        </TitleBar>
        <TopBar {...topBarProps} isHidden={!isTopBarVisible}>
          {children}
        </TopBar>
      </div>
    );
  }

  static propTypes = {
    ...GeneralPropTypes,
    ...FlexboxPropTypes,
    breakpoint: PropTypes.number.isRequired
  };
  
  static defaultProps = {
    breakpoint: DEFAULT_BREAKPOINT
  };
}

export interface ResponsiveNavigationState {
  isTitleBarVisible: boolean;
  isTopBarVisible: boolean;
}

export interface ResponsiveNavigationProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
  breakpoint?: number;
  titleBar?: TitleBarProps;
  menuIcon?: MenuIconProps;
  titleBarTitle?: TitleBarTitleProps;
  topBar?: TopBarProps;
};

/**
 * Title bar sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TitleBar: React.StatelessComponent<TitleBarProps> = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'title-bar',
    props.className,
    generalClassNames(props)
  );

  return (
    <div {...props} className={className}/>
  );
};

export interface TitleBarProps extends GeneralPropTypes, React.HTMLAttributes<HTMLDivElement> { }

/**
 * Title bar menu icon sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const MenuIcon: React.StatelessComponent<MenuIconProps>  = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'menu-icon',
    props.className,
    generalClassNames(props)
  );

  return (
    <button {...props} className={className} type="button"/>
  );
};

export interface MenuIconProps extends GeneralPropTypes, React.ButtonHTMLAttributes<HTMLButtonElement> { }

/**
 * Title bar title sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TitleBarTitle: React.StatelessComponent<TitleBarTitleProps>  = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'title-bar-title',
    props.className,
    generalClassNames(props)
  );

  return (
    <div {...props} className={className}/>
  );
};

export interface TitleBarTitleProps extends GeneralPropTypes, React.HTMLAttributes<HTMLDivElement> { }
