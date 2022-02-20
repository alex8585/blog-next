
import { red } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles(() => ({

  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  link: {
    margin: '5px 0px',
  },
  heroContent: {
    padding: '20px 0px 5px',
    maxWidth: '960px',
    '& li div': { backgroundColor: '#e0e0e0' },
  },
  cardHeader: {
    backgroundColor: '#e0e0e0',
    marginBottom: '10px',
  },
  cardPricing: () => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: '15px',
  }),

  chip: () => ({
    margin: '0px 5px',
  }),
  card: {
    margin: '0 auto',
    maxWidth: 345,
  },
  paper: () => ({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: '7px 10px',
    marginBottom: 12,
    '& .active .MuiButtonBase-root': {
      backgroundColor: 'rgb(144, 131, 112)',
    },
  }),
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: () => ({
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
  }),
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  image: {
    cursor: 'pointer',
  },
  button: {
    marginTop: '15px',
    width: '100%',
    textAlign: 'center',
  },
  paginatorContainer: {
    display: 'flex',
    marginTop: 10,
  },
  pagination: {
    margin: '0 auto',
    '& ul': {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
    },
  },
}))

export default useStyles
