import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', fontFamily: 'Recursive', fontWeight: 'bold', fontSize: '15px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'Recursive', fontWeight: 'bold', fontSize: '15px',
  },
  fonts: {
    fontFamily: 'Style Script',
    fontStyle: 'italic', 
    fontSize: '25px',
  },
  fonts1: {
    fontFamily: 'MonteCarlo',
    fontSize: '20px',
  },
  fonts2: {
    fontFamily: 'Josefin Sans',
    fontWeight: 'bold',
    fontSize: '18px',
  }
}));