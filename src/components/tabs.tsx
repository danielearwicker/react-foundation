import * as React from 'react';
import * as PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * Tabs component.
 * http://foundation.zurb.com/sites/docs/tabs.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Tabs: React.StatelessComponent<TabsProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'tabs',
    props.className,
    {
      'vertical': props.isVertical
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Tabs.propTypes!));

  return <ul {...passProps} className={className}/>;
};

export interface TabsProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLUListElement> {  
  isVertical?: boolean;
};

Tabs.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isVertical: PropTypes.bool
};

/**
 * Tab item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TabItem: React.StatelessComponent<TabItemProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'tabs-title',
    props.className,
    {
      'is-active': props.isActive
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(TabItem.propTypes!));

  return <li {...passProps} className={className}/>;
};

export interface TabItemProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLLIElement> {
  isActive?: boolean;
};

TabItem.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isActive: PropTypes.bool
};

/**
 * Tab panel container component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TabsContent: React.StatelessComponent<TabsContentProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'tabs-content',
    props.className,
    {
      'vertical': props.isVertical
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(TabsContent.propTypes!));

  return <div {...passProps} className={className}/>;
};

export interface TabsContentProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  isVertical?: boolean;
};

TabsContent.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isActive: PropTypes.bool,
  isVertical: PropTypes.bool
};

/**
 * Tab panel item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TabPanel: React.StatelessComponent<TabPanelProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'tabs-panel',
    props.className,
    {
      'is-active': props.isActive
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(TabPanel.propTypes!));

  return <div {...passProps} className={className}/>;
};

export interface TabPanelProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
};

TabPanel.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isActive: PropTypes.bool
};
