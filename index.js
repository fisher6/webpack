class App extends React.Component {
	constructor () {
		super();
		this.state = {
			name: 'Gal'
		};
	}
	render() {
		return <div>{this.state.name}</div>;
	}
}

ReactDOM.render(<App />, document.getElementById('app'));