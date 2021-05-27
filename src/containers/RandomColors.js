import { connect } from 'react-redux';
import RandomColors from '../components/RandomColors';
import { randomHexColor } from '../utils';
import { changeFirstColor, changeLastColor } from '../actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  randFirst: () => {
    const color = randomHexColor();
    const action = changeFirstColor(color);
    dispatch(action);
  },
  randLast: () => {
    const color = randomHexColor();
    const action = changeLastColor(color);
    dispatch(action);
  },
});

// const createContainer = connect(mapStateToProps, mapDispatchToProps);

// const monContainer = createContainer(RandomColors);

// export default monContainer;

export default connect(mapStateToProps, mapDispatchToProps)(RandomColors);
