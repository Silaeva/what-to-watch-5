import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from "../../const";
import {AppRoute} from "../../route";

const getUserBlockTemplate = (status) => {
  if (status === AuthorizationStatus.AUTH) {
    return (
      <div className="user-block__avatar">
        <Link to={AppRoute.MY_LIST}>
          <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </Link>
      </div>
    );
  }
  return (
    <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
  );
};

const UserBlock = (props) => {
  const {authorizationStatus} = props;

  return (
    <div className="user-block">
      {getUserBlockTemplate(authorizationStatus)}
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);
