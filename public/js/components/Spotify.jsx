var Spotify = React.createClass({
	getInitialState: function() {
		return {
			albums: [],
			artist: [],
			count: '',
			limit: 21,
			offset: 0,
			search: false,
			searchValue: ''
		}
	},
	componentWillReceiveProps: function(nextProps) {
		
		this.setState({
			offset: 0,
			searchValue: nextProps.searchValue
		},function(){
			
			if (this.state.searchValue != '') {
				this.callSpotify();
			} else {
				this.setState({
					albums: [],
					artist: [],
					count: "",
					image: "",
					search: false
				});
			}
			
		});
		
	},
	callSpotify: function() {
			
		// build the url string
		var albums_url = "https://api.spotify.com/v1/search?limit=" + this.state.limit + "&offset=" + this.state.offset + "&type=album,artist&q=artist:" + encodeURIComponent(this.state.searchValue);

		var self = this;
		
		// make the api call
		$.ajax(albums_url).done(function(res){
			
			var albumsArray = self.state.albums;
			
			if(self.state.offset === 0) {

				var newOffset = self.state.offset + 21;
				
				self.setState({
					albums: res.albums.items,
					artist: res.artists.items[0],
					count: res.albums.total,
					image: res.artists.items[0].images[0].url,
					offset: newOffset,
					search: 1
				});
				
			} else {
				
				var newAlbumArray = albumsArray.concat(res.albums.items);
				var newOffset = self.state.offset + 21;

				self.setState({
					albums: newAlbumArray,
					offset: newOffset
				});
				
			}

		});
			
	},
	render: function() {
		return (
			<div>
				{this.state.search && (
					<div>
						<ResultCount count={this.state.count}/>
						<ResultArtist artist={this.state.artist}/>
						<ResultAlbums albums={this.state.albums}/>
						<LoadMore onLoadMore={this.callSpotify}/>
					</div>
				)}
			</div>
		);
	}
})