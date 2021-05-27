import { connect } from 'react-redux';
import Counter from '../components/Counter';

const mapStateToProps = (state) => ({
  total: state.nbColors,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
