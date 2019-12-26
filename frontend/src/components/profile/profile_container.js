import { connect } from 'react-redux';
import { fetchUserTweets } from '../../actions/tweet_actions';
import Profile from './profile';

const msp = (state) => ({
  tweets: Object.values(state.tweets.user),
  currentUser: state.session.user
});

const mdp = dispatch => ({
  fetchUserTweets: id => dispatch(fetchUserTweets(id))
});

export default connect(msp, mdp)(Profile);