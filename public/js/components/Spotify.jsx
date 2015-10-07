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
				// build the url string
				var albums_url = "https://api.spotify.com/v1/search?limit=21&offset=0&type=album,artist&q=artist:" + encodeURIComponent(this.state.searchValue);
				// make the api call
				var self = this;
	
				$.ajax(albums_url).done(function(res){
	
					self.setState({
						albums: res.albums.items,
						artist: res.artists.items[0],
						count: res.albums.total,
						image: res.artists.items[0].images[0].url,
						search: 1
					});
	
				});
	
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
	onLoadMore: function() {

		var newOffset = this.state.offset + 21;

		// build the url string
		var albums_url = "https://api.spotify.com/v1/search?limit=" + this.state.limit + "&offset=" + newOffset + "&type=album,artist&q=artist:" + encodeURIComponent(this.state.searchValue);
		// make the api call

		var albumsArray = this.state.albums;
		var self = this;

		$.ajax(albums_url).done(function(res){

			var newAlbumArray = albumsArray.concat(res.albums.items);

			self.setState({
				albums: newAlbumArray,
				offset: newOffset
			});

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
						<LoadMore onLoadMore={this.onLoadMore}/>
					</div>
				)}
			</div>
		);
	}
})