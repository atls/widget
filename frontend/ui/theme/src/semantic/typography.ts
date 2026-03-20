import { fontSizes }   from '../tokens/base/typography/font-sizes.js'
import { fontWeights } from '../tokens/base/typography/font-weights.js'
import { fonts }       from '../tokens/base/typography/fonts.js'
import { lineHeights } from '../tokens/base/typography/line-heights.js'

export const typography = {
  displayLarge: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.giant,
    lineHeight: lineHeights.giant,
    fontWeight: fontWeights.semibold,
  },
  displayMedium: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.massive,
    lineHeight: lineHeights.massive,
    fontWeight: fontWeights.semibold,
  },
  displaySmall: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.huge,
    lineHeight: lineHeights.huge,
    fontWeight: fontWeights.semibold,
  },

  headingLarge: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.xxxxl,
    lineHeight: lineHeights.xxxxl,
    fontWeight: fontWeights.semibold,
  },
  headingMedium: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.xxxl,
    lineHeight: lineHeights.xxxl,
    fontWeight: fontWeights.semibold,
  },
  headingSmall: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.xxl,
    lineHeight: lineHeights.xxl,
    fontWeight: fontWeights.semibold,
  },

  subheadingLarge: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    fontWeight: fontWeights.semibold,
  },
  subheadingMedium: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
    fontWeight: fontWeights.semibold,
  },
  subheadingSmall: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.semibold,
  },

  bodyLarge: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    fontWeight: fontWeights.regular,
  },
  bodyLargeSemibold: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    fontWeight: fontWeights.semibold,
  },
  bodyMedium: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
    fontWeight: fontWeights.regular,
  },
  bodyMediumSemibold: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
    fontWeight: fontWeights.semibold,
  },
  bodySmall: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.regular,
  },
  bodySmallSemibold: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.semibold,
  },

  captionSmall: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.regular,
  },
  captionSmallSemibold: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.semibold,
  },

  labelSmall: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    fontWeight: fontWeights.regular,
  },
  labelSmallSemibold: {
    fontFamily: fonts.primary,
    fontSize: fontSizes.xs,
    lineHeight: lineHeights.xs,
    fontWeight: fontWeights.semibold,
  },
} as const
