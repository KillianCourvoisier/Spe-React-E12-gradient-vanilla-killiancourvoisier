import { connect } from 'react-redux';
import Directions from '../components/Directions';
import { changeDirection } from '../actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: (argument) => {
    const action = changeDirection(argument);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Directions);
