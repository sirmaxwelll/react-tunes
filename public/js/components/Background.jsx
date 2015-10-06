var Background = React.createClass({
	render: function () {
		return (
			<div>
				<div id="backgroundImage" style={{backgroundImage: 'url(' + this.props.image + ')'}}></div>
			</div>
		);
	}
})