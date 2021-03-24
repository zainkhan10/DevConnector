import { Fragment } from "react";

const ProfileAbout = ({ profile: { bio, skills, user } }) => (
  <div className="profile-about bg-light p-2">
    {bio && (
      <Fragment>
        <h2 className="text-primary">{user.name.trim().split(" ")[0]}'s Bio</h2>
        <p>{bio}</p>
        <div className="line"></div>
      </Fragment>
    )}
    <h2 className="text-primary">Skill Set</h2>
    <div className="skills">
      {skills &&
        skills.map((skill, index) => (
          <div className="p-1" key={`${skill}${index}`}>
            <i className="fa fa-check"></i> {skill}
          </div>
        ))}
    </div>
  </div>
);

export default ProfileAbout;
