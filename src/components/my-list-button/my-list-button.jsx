import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sendFavoriteStatus} from "../../store/api-actions";
import {setDataIsSending, setIsFilmByIdLoading} from "../../store/action";
import {AuthorizationStatus} from "../../const";
import {AppRoute} from "../../route";
import {Link} from "react-router-dom";

const MyListButton = (props) => {
  const {id, isFavorite, onMyListClick, authorizationStatus, isDataSending, isDataSendError} = props;

  const getBtnTextContent = () => {
    if (isDataSending) {
      return `Loading...`;
    } else if (isDataSendError) {
      return `Error... =(`;
    }
    return `My list`;
  };

  return (
    <Link className="btn btn--list movie-card__button" type="button"
      to={authorizationStatus !== AuthorizationStatus.AUTH ? AppRoute.LOGIN : ``}
      onClick={(evt) => {
        if (authorizationStatus === AuthorizationStatus.AUTH) {
          evt.preventDefault();
          onMyListClick(id, isFavorite);
        }
      }}
    >
      {
        isFavorite
          ?
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#in-list"></use>
          </svg>
          :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
      }
      <span>{getBtnTextContent()}</span>
    </Link>
  );
};

MyListButton.propTypes = {
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
  onMyListClick: PropTypes.func,
  authorizationStatus: PropTypes.string,
  isDataSending: PropTypes.bool,
  isDataSendError: PropTypes.bool
};

const mapStateToProps = ({DATA, USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  isDataSending: DATA.isDataSending,
  isDataSendError: DATA.isDataSendError
});

const mapDispatchToProps = (dispatch) => ({
  onMyListClick(filmId, isFavorite) {
    dispatch(setDataIsSending(true));
    dispatch(setIsFilmByIdLoading(true));
    dispatch(sendFavoriteStatus(filmId, isFavorite));
  }
});

export {MyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
