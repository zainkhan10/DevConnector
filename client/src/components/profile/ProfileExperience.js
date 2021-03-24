import Moment from "react-moment";

const ProfileExperience = ({
  experience: { company, title, current, to, from, description },
}) => (
  <div>
    <h3 className="text-dark">{company}</h3>
    <p>
      <Moment format="MMM YYYY">{from}</Moment> -{" "}
      {current ? "Current" : <Moment format="MMM YYYY">{to}</Moment>}
    </p>
    <p>
      <strong>Position: </strong>
      {title}
    </p>
    <p>
      <strong>Description: </strong>
      {description}
    </p>
  </div>
);

export default ProfileExperience;
