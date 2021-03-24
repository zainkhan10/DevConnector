import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileById } from "../../store/actions/creators";
import Spinner from "../layout/Spinner";
import ProfileAbout from "./ProfileAbout";
import ProfileEducation from "./ProfileEducation";
import ProfileExperience from "./ProfileExperience";
import ProfileGithub from "./ProfileGithub";
import ProfileTop from "./ProfileTop";

const Profile = ({ match }) => {
  const dispatch = useDispatch();
  const id = match.params.id;
  const { loading, profile } = useSelector(({ profile }) => profile);
  const { isAuthenticated, user } = useSelector(({ auth }) => auth);

  useEffect(() => {
    dispatch(getProfileById(id));
  }, [dispatch, id]);

  return loading || !profile ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/profiles" className="btn btn-light">
        Back To Profiles
      </Link>
      {isAuthenticated && user && profile && user._id === profile.user._id && (
        <Link to="/edit-profile" className="btn btn-dark">
          Edit Profile
        </Link>
      )}
      <div className="profile-grid my-1">
        <ProfileTop profile={profile} />
        <ProfileAbout profile={profile} />
        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experience</h2>
          {profile.experience.length > 0 ? (
            profile.experience.map((exp) => (
              <ProfileExperience key={exp._id} experience={exp} />
            ))
          ) : (
            <h4>No experience credentials</h4>
          )}
        </div>
        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          {profile.education.length > 0 ? (
            profile.education.map((exp) => (
              <ProfileEducation key={exp._id} education={exp} />
            ))
          ) : (
            <h4>No education credentials</h4>
          )}
        </div>
        {profile.githubusername && (
          <ProfileGithub username={profile.githubusername} />
        )}
      </div>
    </Fragment>
  );
};

export default Profile;
