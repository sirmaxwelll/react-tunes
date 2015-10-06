var Search = React.createClass({
	render: function () {
		return (
			<div>
				<input onChange={this.props.onChange} ref="search" type="text" id="artist" placeholder="Search an Artist"/>
			</div>
		);
	}
})