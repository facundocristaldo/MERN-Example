import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getProfileById } from "../../state/actions/profileAction";
import Spinner from "../layout/Spinner";
import ProfileAbout from "./ProfileAbout";
import ProfileEducation from "./ProfileEducation";
import ProfileExperience from "./ProfileExperience";
import ProfileGithub from "./ProfileGithub";
import ProfileTop from "./ProfileTop";

const Profile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile);
  const authState = useSelector((state) => state.auth);
  const { profile, loading } = profileState;

  useEffect(() => {
    dispatch(getProfileById(params.userId));
  }, [dispatch, params.userId]);

  return (
    <>
      {profile === null || loading === true ? (
        <Spinner />
      ) : (
        <>
          <Link to="/profiles" className="btn btn-light">
            Back to profiles
          </Link>
          {authState.isAuthenticated &&
            authState.loading === false &&
            authState.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          <div class="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div class="profile-exp bg-white p-2">
              <h2 class="text-primary">Experience</h2>
              {profile.experience.length <= 0 ? (
                <h4>No experience credentials</h4>
              ) : (
                profile.experience.map((exp) => (
                  <ProfileExperience key={exp._id} experience={exp} />
                ))
              )}
            </div>
            <div class="profile-edu bg-white p-2">
              <h2 class="text-primary">Education</h2>
              {profile.education.length <= 0 ? (
                <h4>No education credentials</h4>
              ) : (
                profile.education.map((edu) => (
                  <ProfileEducation key={edu._id} education={edu} />
                ))
              )}
            </div>
            {profile.githubusername && (
              <ProfileGithub githubusername={profile.githubusername} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
