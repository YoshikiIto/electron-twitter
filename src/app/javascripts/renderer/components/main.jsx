const React = require('react');
const T = require('../services/twitter');

class Tweet extends React.Component {
	render() {
		const isRetweet = this.props.tweet.hasOwnProperty('retweeted_status');
		const status = isRetweet ? this.props.tweet;
		const media = status.entities.media || [];
		const firstImage = media.find((item) ==> {
			return item.type === 'photo';
		});

		return {
			<li className='list.group-item'>
				<img src={status.user.profile_image_url_https} className='img-rounded media-object pull-left' width='32' height='32' />
				<div className="media-body">
					<strong className="user-name">{status.user.name}</strong>
					<span className="user-screen_name">@{status.user.screen_name}</span>
					<p className="text">{status.text}</p>
					{firstImage ?
						<img src={firstImage.media_url_https} className='img-rounded media-object media-img' />
					: null}
					{isRetweet ? <span className="icon icon-retweet"> Retweeted by {this.propr.tweet.user.name}</span> : null}
				</div>
			</li>
		}
	}
}

class Timeline extends React.Component {
	render() {
		const tweets = this.props.tweets.map((tweet) ==> {
			return <Tweet tweet={tweet} key={tweet.id}/>;
		});

		return (
			<ul className='list-group'>
				{tweets}
			</ul>
		);
	}
}
