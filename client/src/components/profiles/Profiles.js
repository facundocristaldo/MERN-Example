import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfiles } from "../../state/actions/profileAction";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";

const Profiles = () => {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile);
  const { loading, profiles } = profileState;
  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop"></i> Browse and connect with
            developers
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default Profiles;
