
/**
 * Breakpoints enumerable.
 */
export enum Breakpoints {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  XLARGE = 'xlarge',
  XXLARGE = 'xxlarge'
};

/**
 * Badge color enumerable.
 */
export enum BadgeColors {
  INFO = 'info',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ALERT = 'alert'
};

/**
 * Button color enumerable.
 */
export enum ButtonColors {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  ALERT = 'alert',
  WARNING = 'warning'
};

/**
 * Button group color enumerable.
 */
export enum ButtonGroupColors {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  ALERT = 'alert',
  WARNING = 'warning'
};

/**
 * Callout color enumerable.
 */
export enum CalloutColors {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ALERT = 'alert'
};

/**
 * Label color enumerable.
 */
export enum LabelColors {
  INFO = 'info',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ALERT = 'alert'
};

/**
 * Progress colors enumerable.
 */
export enum ProgressColors {
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ALERT = 'alert'
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
export enum CalloutSizes {
  SMALL = 'small',
  LARGE = 'large'
};

/**
 * Button size enumerable.
 */
export enum ButtonSizes {
  TINY = 'tiny',
  SMALL = 'small',
  LARGE = 'large'
};

/**
 * Button group size enumerable.
 */
export enum ButtonGroupSizes {
  TINY = 'tiny',
  SMALL = 'small',
  LARGE = 'large'
};

/**
 * Switch size enumerable.
 */
export enum SwitchSizes {
  TINY = 'tiny',
  SMALL = 'small',
  LARGE = 'large'
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
export enum HorizontalAlignments {
  CENTER = 'center',
  RIGHT = 'right',
  JUSTIFY = 'justify',
  SPACED = 'spaced'
};

/**
 * Vertical alignment enumerable.
 */
export enum VerticalAlignments {
  TOP = 'top',
  MIDDLE = 'middle',
  BOTTOM = 'bottom',
  STRETCH = 'stretch'
};

/**
 * Menu alignment enumerable.
 *
 * @type {{RIGHT = string, CENTER = string}}
 */
export enum MenuAlignments {
  RIGHT = 'right',
  CENTER = 'center'
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
export enum FloatTypes {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
};

/**
 * Switch type enumerable.
 */
export enum SwitchInputTypes {
  CHECKBOX = 'checkbox',
  RADIO = 'radio'
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
export enum GutterTypes {
  MARGIN = 'margin',
  PADDING = 'padding'
};

/**
 * Extended breakpoints enumerable (includes 'ALL' option, which is useful when breakpoint is not defined).
 */
export enum ExtendedBreakpoints {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  XLARGE = 'xlarge',
  XXLARGE = 'xxlarge',
  ALL = 'all'
};

/**
 * Space control enumerable.
 */
export enum SpaceControls {
  AUTO = 'auto',
  GROW = 'grow',
  SHRINK = 'shrink'
};
