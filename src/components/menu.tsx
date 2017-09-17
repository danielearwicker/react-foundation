import * as React from 'react';
import * as PropTypes from 'prop-types';
import { MenuAlignments } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues } from '../utils';

/**
 * Menu component.
 * http://foundation.zurb.com/sites/docs/menu.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Menu: React.StatelessComponent<MenuProps> = (props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'menu',
    props.className,
    {
      'align-right': props.alignment === MenuAlignments.RIGHT,
      'align-center': props.alignment === MenuAlignments.CENTER,
      'icon-top': props.iconsOnTop,
      'expanded': props.isExpanded,
      'vertical': props.isVertical,
      'simple': props.isSimple,
      'nested': props.isNested,
      'dropdown': props.isDropdown,
      'medium-horizontal': props.horizontalOnMedium
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Menu.propTypes!));

  return <ul {...passProps} className={className}/>;
};

export interface MenuProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLUListElement> {
  alignment?: MenuAlignments;
  iconsOnTop?: boolean;
  isExpanded?: boolean;
  isVertical?: boolean;
  isDropdown?: boolean;
  isSimple?: boolean;
  isNested?: boolean;
  horizontalOnMedium?: boolean;
};

Menu.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  alignment: PropTypes.oneOf(objectValues(MenuAlignments)),
  iconsOnTop: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isVertical: PropTypes.bool,
  isDropdown: PropTypes.bool,
  isSimple: PropTypes.bool,
  isNested: PropTypes.bool,
  horizontalOnMedium: PropTypes.bool
};

/**
 * Menu item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const MenuItem: React.StatelessComponent<MenuItemProps> = (props) => {
  const className = createClassName(
    props.className,
    {
      'active': props.isActive
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(MenuItem.propTypes!));

  return <li {...passProps} className={className}/>;
};

export interface MenuItemProps extends FlexboxPropTypes, React.HTMLAttributes<HTMLLIElement> {
  isActive?: boolean;
};

MenuItem.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isActive: PropTypes.bool
};

/**
 * Menu text wrapper-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const MenuText = (props: MenuItemProps) => (
  <MenuItem {...props} className={props.className || 'menu-text'}/>
);
