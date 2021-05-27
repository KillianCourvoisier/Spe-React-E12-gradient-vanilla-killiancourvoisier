import { connect } from 'react-redux';
import Gradient from '../components/Gradient';

const mapStateToProps = (state) => ({
  toto: 'toto',
  firstColor: state.firstColor,
  lastColor: state.lastColor,
  direction: state.direction,
});

const mapDispatchToProps = {};

// const createContainer = connect(mapStateToProps, mapDispatchToProps);

// const monContainer = createContainer(Gradient);

// export default monContainer;

export default connect(mapStateToProps, mapDispatchToProps)(Gradient);
