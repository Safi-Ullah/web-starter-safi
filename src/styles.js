import { fade } from '@material-ui/core/styles/colorManipulator';

export default (theme) => ({
  aboveDialog: {
    zIndex: 1301
  },
  addButton: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  brightButton: {
    marginTop: theme.spacing.unit * 2,
    backgroundColor: theme.palette.primary.bright,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.brightHover,
    },
  },
  centered: {
    textAlign: 'center'
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 2}px`,
  },
  errorText: {
    color: 'red',
  },
  formattedText: {
    whiteSpace: 'pre-wrap'
  },
  grow: {
    flexGrow: 1
  },
  list: {
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
  },
  loadingSpinner: {
    margin: theme.spacing.unit
  },
  logo: {
    fontFamily: 'Brush Script MT, SavoyeLetPlain',
  },
  page: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    caretColor: theme.palette.secondary.main
  },
  signInRoot: {
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    '& a': {
      color: theme.palette.secondary.main,
    }
  },
  signInLogo: {
    color: theme.palette.common.white,
    position: 'absolute',
    top: theme.spacing.unit * 4,
    left: theme.spacing.unit * 2,
    transform: 'rotate(-20deg)'
  },
  successText: {
    color: 'green',
  },
  truncate: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  listItemRoot: {
    margin: '20px'
  },
  card: {
    display: 'flex',
    borderRadius: '20px',
    textAlign: 'center'
  },
  restaurantDetailsCard: {
    textAlign: 'center',
    borderRadius: '20px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '100%',
  },
  scrollableList: {
    height: '93vh',
    overflowY: 'scroll',
    background: '#d2dadd'
  },
  leftMargin: {
    margin: '5px 0 0 15px'
  },
  mobileHide: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  visitBtn: {
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  fullScreen: {
    height: '100vh',
    background: '#d2dadd'
  },
  cardActions: {
    display: 'flex'
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});
