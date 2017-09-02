var React = require('react');
var ReactDOM = require('react-dom');

require('../styles/styles.scss');

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.message}</p>
			</div>
		)
	}
}

ReactDOM.render(<App title="Webpack with React Boilerplate" message="Start your project fast, seamless and using the top edge technologies available!" />, document.getElementById('react-container'));

