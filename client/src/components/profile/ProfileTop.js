import { Fragment } from "react";

const ProfileTop = ({
  profile: { status, company, location, website, social, user },
}) => (
  <div className="profile-top bg-primary p-2">
    <img className="round-img my-1" src={user.avatar} alt="" />
    <h1 className="large">{user.name}</h1>
    <p className="lead">{`${status} at ${company && company}`}</p>
    <p>{location && location}</p>
    <div className="icons my-1">
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-globe fa-2x"></i>
        </a>
      )}
      {social && (
        <Fragment>
          {social.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          )}
          {social.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          )}
          {social.youtube && (
            <a href={social.youtube} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          )}
          {social.instagram && (
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

export default ProfileTop;
