import { connect } from 'react-redux';
import { composeTweet } from '../../actions/tweet_actions';
import TweetCompose from './tweet_compose';

const msp = (state) => ({
  currentUser: state.session.user,
  newTweet: state.tweets.new
});

const mdp = dispatch => ({
  composeTweet: data => dispatch(composeTweet(data))
});

export default connect(msp, mdp)(TweetCompose);