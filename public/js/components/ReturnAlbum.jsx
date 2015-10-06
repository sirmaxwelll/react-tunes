var ReturnAlbum = React.createClass({
	render: function () {
		return (
			<div>
				<a href={this.props.album.external_urls.spotify} target='_blank'>
					<div className="title">
						<h3>{this.props.album.name}</h3>
					</div>
					<img src={this.props.album.images[0].url}/>
				</a>
			</div>
		);
	}
})