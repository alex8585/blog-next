
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: '960px',
    margin: '0 auto',
    marginTop: 50,
  },
  paper: {
    padding: '12px',
    marginTop: 20,
    maxWidth: 960,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  large: {
    width: '120px',
    height: '120px',
  },
  heroContent: {
    padding: '20px 0px 5px',
  },
  ListItemText: {
    '& .MuiTypography-body2': {
      fontWeight: 'bold',
    },
  },
}))

export default useStyles
