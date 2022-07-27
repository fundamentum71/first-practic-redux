import { connect } from 'react-redux/es/exports';
import * as actions from '../actions';
//import { bindActionCreators } from 'redux';

const Counter = ({ counter, inc, dec, rnd }) => {
	return (
		<div className="jumbotron">
			<h1>{counter}</h1>
			<button onClick={dec} className="btn btn-primary">
				DEC
			</button>
			<button onClick={inc} className="btn btn-primary">
				INC
			</button>
			<button onClick={rnd} className="btn btn-primary">
				RND
			</button>
		</div>
	);
};
//передача состояния
const mapStateToProps = (state) => {
	return {
		counter: state.value,
	};
};

//передача функции для изменения состояния
//const mapDispatchToProps = (dispatch) => {
//	return bindActionCreators(actions, dispatch);
//};

export default connect(mapStateToProps, actions)(Counter);

//если переделать в классовый компонет, то все будет работать.
