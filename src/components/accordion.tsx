import * as React from 'react';
import * as PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys } from '../utils';

/**
 * Accordion component.
 * http://foundation.zurb.com/sites/docs/accordion.html
  */
export const Accordion: React.StatelessComponent<AccordianProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'accordion',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Accordion.propTypes!));

  return <ul {...passProps} className={className}>{props.children || []}</ul>;
};

export interface AccordianProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLUListElement> {  
};

Accordion.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  children: PropTypes.any,
};

/**
 * Accordion item component.
 */
export const AccordionItem: React.StatelessComponent<AccordianItemProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'accordion-item',
    props.className,
    {
      'is-active': props.isActive
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(AccordionItem.propTypes!));

  return <li {...passProps} className={className}/>;
};

export interface AccordianItemProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLLIElement> {
  isActive?: boolean;
};

AccordionItem.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isActive: PropTypes.bool
};

/**
 * Accordion panel container component.
 */
export const AccordionContent: React.StatelessComponent<AccordianContentProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'accordion-content',
    props.className,
    {
      'is-active': props.isActive
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(AccordionContent.propTypes!));

  return <div {...passProps} className={className}/>;
};

export interface AccordianContentProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
};

AccordionContent.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isActive: PropTypes.bool
};

/**
 * Accordion panel title component.
 */
export const AccordionTitle: React.StatelessComponent<AccordionTitleProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'accordion-title',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(AccordionContent.propTypes!));

  return <a {...passProps} className={className}/>;
};

export interface AccordionTitleProps extends FlexboxPropTypes, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean;
};

AccordionTitle.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
};
