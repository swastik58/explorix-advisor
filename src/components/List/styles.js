import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  fonts: {
    color: 'white',
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
    backgroundColor: '#0c0c0c',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
}));