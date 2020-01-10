import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
fairyGateTheme.baseFontSize = '18px'
fairyGateTheme.overrideThemeStyles = ({ adjustFontSizeTo, rhythm }, options, styles) => ({
 
  blockquote: {
    ...adjustFontSizeTo('19px'),
    color: '',
    fontStyle: 'italic',
    paddingLeft: rhythm(13/16),
    marginLeft: rhythm(-1),
    borderLeft: `none`,
  },
  'blockquote > :last-child': {
    marginBottom: 0,
  },
})

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography