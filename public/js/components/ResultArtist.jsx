var ResultArtist = React.createClass({
	render: function () {
		return (
			<div>
				<div className="artist">
					<img height='300' src={this.props.artist.images[1].url}/>
					<a href={this.props.artist.external_urls.spotify} target='_blank'>
						<h3>{this.props.artist.name}</h3>
					</a>
					<strong>Popularity: </strong>{this.props.artist.popularity}
				</div>
			</div>
		);
	}
})