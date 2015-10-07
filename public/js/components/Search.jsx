var Search = React.createClass({
	handleChange: function (event) {
		this.props.onChange(event.target.value);
	},
	render: function () {
		console.log(this.props);
		return (
			<div>
				<input onChange={this.handleChange} value={this.props.value} ref="search" type="text" id="artist" placeholder="Search an Artist"/>
			</div>
		);
	}
})