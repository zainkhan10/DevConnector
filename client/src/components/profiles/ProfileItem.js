import { Link } from "react-router-dom";

const ProfileItem = ({
  profile: { skills, user, status, company, location },
}) => (
  <div className="profile bg-light">
    <img className="round-img" src={user.avatar} alt="" />
    <div>
      <h2>{user.name}</h2>
      <p>{`${status} at ${company && company}`}</p>
      <p>{location}</p>
      <Link to={`/profile/${user._id}`} className="btn btn-primary">
        View Profile
      </Link>
    </div>
    <ul>
      {skills &&
        skills.slice(0, 5).map((skill, index) => (
          <li className="text-primary" key={`${skills}-${index}`}>
            <i className="fas fa-check"></i> {skill}
          </li>
        ))}
    </ul>
  </div>
);

export default ProfileItem;
