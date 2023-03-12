import PropTypes from 'prop-types';

import {FriendListItem} from 'components/FriendListItem/FriendListItem';

import { StyledFriendList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyledFriendList>
      {friends.map(({ id, ...props }) => {
        return <FriendListItem key={id} {...props} />;
      })}
    </StyledFriendList>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};