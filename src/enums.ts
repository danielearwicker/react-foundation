
/**
 * Breakpoints enumerable.
 */
//  export enum Breakpoints {
//   SMALL = 'small',
//   MEDIUM = 'medium',
//   LARGE = 'large',
//   XLARGE = 'xlarge',
//   XXLARGE = 'xxlarge'
// };

export type Breakpoints = 'small'|'medium'|'large'|'xlarge'|'xxlarge';

export const Breakpoints = {
    SMALL: 'small' as Breakpoints,
    MEDIUM: 'medium' as Breakpoints,
    LARGE: 'large' as Breakpoints,
    XLARGE: 'xlarge' as Breakpoints,
    XXLARGE: 'xxlarge' as Breakpoints,
};

/**
 * Badge color enumerable.
 */
// export enum BadgeColors {
//   INFO = 'info',
//   SECONDARY = 'secondary',
//   SUCCESS = 'success',
//   WARNING = 'warning',
//   ALERT = 'alert'
// };

export type BadgeColors = 'info'|'secondary'|'success'|'warning'|'alert';

export const BadgeColors = {
    INFO: 'info' as BadgeColors,
    SECONDARY: 'secondary' as BadgeColors,
    SUCCESS: 'success' as BadgeColors,
    WARNING: 'warning' as BadgeColors,
    ALERT: 'alert' as BadgeColors,
};

/**
 * Button color enumerable.
 */
// export enum ButtonColors {
//   PRIMARY = 'primary',
//   SECONDARY = 'secondary',
//   SUCCESS = 'success',
//   ALERT = 'alert',
//   WARNING = 'warning'
// };

export type ButtonColors = 'primary'|'secondary'|'success'|'alert'|'warning';

export const ButtonColors = {
    PRIMARY: 'primary' as ButtonColors,
    SECONDARY: 'secondary' as ButtonColors,
    SUCCESS: 'success' as ButtonColors,
    ALERT: 'alert' as ButtonColors,
    WARNING: 'warning' as ButtonColors,
};

/**
 * Button group color enumerable.
 */
// export enum ButtonGroupColors {
//   PRIMARY = 'primary',
//   SECONDARY = 'secondary',
//   SUCCESS = 'success',
//   ALERT = 'alert',
//   WARNING = 'warning'
// };

export type ButtonGroupColors = 'primary'|'secondary'|'success'|'alert'|'warning';

export const ButtonGroupColors = {
    PRIMARY: 'primary' as ButtonGroupColors,
    SECONDARY: 'secondary' as ButtonGroupColors,
    SUCCESS: 'success' as ButtonGroupColors,
    ALERT: 'alert' as ButtonGroupColors,
    WARNING: 'warning' as ButtonGroupColors,
};

/**
 * Callout color enumerable.
 */
// export enum CalloutColors {
//   PRIMARY = 'primary',
//   SECONDARY = 'secondary',
//   SUCCESS = 'success',
//   WARNING = 'warning',
//   ALERT = 'alert'
// };

export type CalloutColors = 'primary'|'secondary'|'success'|'warning'|'alert';

export const CalloutColors = {
    PRIMARY: 'primary' as CalloutColors,
    SECONDARY: 'secondary' as CalloutColors,
    SUCCESS: 'success' as CalloutColors,
    WARNING: 'warning' as CalloutColors,
    ALERT: 'alert' as CalloutColors,
};

/**
 * Label color enumerable.
 */
// export enum LabelColors {
//   INFO = 'info',
//   SECONDARY = 'secondary',
//   SUCCESS = 'success',
//   WARNING = 'warning',
//   ALERT = 'alert'
// };

export type LabelColors = 'info'|'secondary'|'success'|'warning'|'alert';

export const LabelColors = {
    INFO: 'info' as LabelColors,
    SECONDARY: 'secondary' as LabelColors,
    SUCCESS: 'success' as LabelColors,
    WARNING: 'warning' as LabelColors,
    ALERT: 'alert' as LabelColors,
};

/**
 * Progress colors enumerable.
 */
// export enum ProgressColors {
//   SECONDARY = 'secondary',
//   SUCCESS = 'success',
//   WARNING = 'warning',
//   ALERT = 'alert'
// };

export type ProgressColors = 'secondary'|'success'|'warning'|'alert';

export const ProgressColors = {
    SECONDARY: 'secondary' as ProgressColors,
    SUCCESS: 'success' as ProgressColors,
    WARNING: 'warning' as ProgressColors,
    ALERT: 'alert' as ProgressColors,
};

/**
 * Color meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 */
export const Colors = {
  ...BadgeColors,
  ...ButtonColors,
  ...ButtonGroupColors,
  ...CalloutColors,
  ...LabelColors,
  ...ProgressColors
};

/**
 * Callout size enumerable.
 */
// export enum CalloutSizes {
//   SMALL = 'small',
//   LARGE = 'large'
// };

export type CalloutSizes = 'small'|'large';

export const CalloutSizes = {
    SMALL: 'small' as CalloutSizes,
    LARGE: 'large' as CalloutSizes,
};

/**
 * Button size enumerable.
 */
// export enum ButtonSizes {
//   TINY = 'tiny',
//   SMALL = 'small',
//   LARGE = 'large'
// };

export type ButtonSizes = 'tiny'|'small'|'large';

export const ButtonSizes = {
    TINY: 'tiny' as ButtonSizes,
    SMALL: 'small' as ButtonSizes,
    LARGE: 'large' as ButtonSizes,
};

/**
 * Button group size enumerable.
 */
// export enum ButtonGroupSizes {
//   TINY = 'tiny',
//   SMALL = 'small',
//   LARGE = 'large'
// };

export type ButtonGroupSizes = 'tiny'|'small'|'large';

export const ButtonGroupSizes = {
    TINY: 'tiny' as ButtonGroupSizes,
    SMALL: 'small' as ButtonGroupSizes,
    LARGE: 'large' as ButtonGroupSizes,
};

/**
 * Switch size enumerable.
 */
// export enum SwitchSizes {
//   TINY = 'tiny',
//   SMALL = 'small',
//   LARGE = 'large'
// };

export type SwitchSizes = 'tiny'|'small'|'large';

export const SwitchSizes = {
    TINY: 'tiny' as SwitchSizes,
    SMALL: 'small' as SwitchSizes,
    LARGE: 'large' as SwitchSizes,
};

/**
 * Size meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 */
export const Sizes = {
  ...ButtonSizes,
  ...ButtonGroupSizes,
  ...CalloutSizes,
  ...SwitchSizes
};

/**
 * Horizontal alignment enumerable.
 */
// export enum HorizontalAlignments {
//   CENTER = 'center',
//   RIGHT = 'right',
//   JUSTIFY = 'justify',
//   SPACED = 'spaced'
// };

export type HorizontalAlignments = 'center'|'right'|'justify'|'spaced';

export const HorizontalAlignments = {
    CENTER: 'center' as HorizontalAlignments,
    RIGHT: 'right' as HorizontalAlignments,
    JUSTIFY: 'justify' as HorizontalAlignments,
    SPACED: 'spaced' as HorizontalAlignments,
};

/**
 * Vertical alignment enumerable.
 */
// export enum VerticalAlignments {
//   TOP = 'top',
//   MIDDLE = 'middle',
//   BOTTOM = 'bottom',
//   STRETCH = 'stretch'
// };

export type VerticalAlignments = 'top'|'middle'|'bottom'|'stretch';

export const VerticalAlignments = {
    TOP: 'top' as VerticalAlignments,
    MIDDLE: 'middle' as VerticalAlignments,
    BOTTOM: 'bottom' as VerticalAlignments,
    STRETCH: 'stretch' as VerticalAlignments,
};

/**
 * Menu alignment enumerable.
 *
 * @type {{RIGHT = string, CENTER = string}}
 */
// export enum MenuAlignments {
//   RIGHT = 'right',
//   CENTER = 'center'
// };

export type MenuAlignments = 'right'|'center';

export const MenuAlignments = {
    RIGHT: 'right' as MenuAlignments,
    CENTER: 'center' as MenuAlignments,
};

/**
 * Alignments meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 */
export const Alignments = {
  ...HorizontalAlignments,
  ...VerticalAlignments,
  ...MenuAlignments
};

/**
 * Float types enumerable.
 */
// export enum FloatTypes {
//   LEFT = 'left',
//   CENTER = 'center',
//   RIGHT = 'right'
// };

export type FloatTypes = 'left'|'center'|'right';

export const FloatTypes = {
    LEFT: 'left' as FloatTypes,
    CENTER: 'center' as FloatTypes,
    RIGHT: 'right' as FloatTypes,
};

/**
 * Switch type enumerable.
 */
// export enum SwitchInputTypes {
//   CHECKBOX = 'checkbox',
//   RADIO = 'radio'
// };

export type SwitchInputTypes = 'checkbox'|'radio';

export const SwitchInputTypes = {
    CHECKBOX: 'checkbox' as SwitchInputTypes,
    RADIO: 'radio' as SwitchInputTypes,
};

/**
 * Input type meta-enumerable.
 * This is exposed to the consumer, while the sub-sets are only used internally.
 */
export const InputTypes = {
  ...SwitchInputTypes
};

/**
 * Gutter type enumerable.
 */
// export enum GutterTypes {
//   MARGIN = 'margin',
//   PADDING = 'padding'
// };

export type GutterTypes = 'margin'|'padding';

export const GutterTypes = {
    MARGIN: 'margin' as GutterTypes,
    PADDING: 'padding' as GutterTypes,
};

/**
 * Extended breakpoints enumerable (includes 'ALL' option, which is useful when breakpoint is not defined).
 */
// export enum ExtendedBreakpoints {
//   SMALL = 'small',
//   MEDIUM = 'medium',
//   LARGE = 'large',
//   XLARGE = 'xlarge',
//   XXLARGE = 'xxlarge',
//   ALL = 'all'
// };

export type ExtendedBreakpoints = 'small'|'medium'|'large'|'xlarge'|'xxlarge'|'all';

export const ExtendedBreakpoints = {
    SMALL: 'small' as ExtendedBreakpoints,
    MEDIUM: 'medium' as ExtendedBreakpoints,
    LARGE: 'large' as ExtendedBreakpoints,
    XLARGE: 'xlarge' as ExtendedBreakpoints,
    XXLARGE: 'xxlarge' as ExtendedBreakpoints,
    ALL: 'all' as ExtendedBreakpoints,
};

/**
 * Space control enumerable.
 */
// export enum SpaceControls {
//   AUTO = 'auto',
//   GROW = 'grow',
//   SHRINK = 'shrink'
// };

export type SpaceControls = 'auto'|'grow'|'shrink';

export const SpaceControls = {
    AUTO: 'auto' as SpaceControls,
    GROW: 'grow' as SpaceControls,
    SHRINK: 'shrink' as SpaceControls,
};

