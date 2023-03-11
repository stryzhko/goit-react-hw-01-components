import PropTypes from 'prop-types';
import { StyledProfile, StyledUl } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <StyledProfile>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <StyledUl>
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </StyledUl>
    </StyledProfile>
  );
};

Profile.propTypes = {
  username:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats:PropTypes.shape({
      followers:PropTypes.number,
      views:PropTypes.number,
      likes:PropTypes.number,
  })
}