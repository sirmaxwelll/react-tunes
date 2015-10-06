var LoadMore = React.createClass({
	render: function () {
		return (
			<div>
				<div id="loadmore">
					<button onClick={this.props.onLoadMore}>Load More</button>
				</div>
			</div>
		);
	}
})