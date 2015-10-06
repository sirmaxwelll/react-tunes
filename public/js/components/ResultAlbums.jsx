var ResultAlbums = React.createClass({
	render: function () {
		return (
			<div>
				<div className="clear"></div>
				<div className="albums">
					<h2>Albums</h2>
					{this.props.albums.map(function(album) {
						return (
							<ReturnAlbum album={album}/>
						);
					})}
				</div>
				<div className="clear"></div>
			</div>
		);
	}
})