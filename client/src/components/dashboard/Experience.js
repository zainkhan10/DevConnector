import { Fragment } from "react";
import Moment from "react-moment";

const Experience = ({ experiences }) => {
  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {experiences &&
            experiences.map((experience) => (
              <tr key={experience._id}>
                <td>{experience.company}</td>
                <td className="hide-sm">{experience.title}</td>
                <td className="hide-sm">
                  <Moment format="DD MMM, YYYY">{experience.from}</Moment> -
                  {experience.to ? (
                    <Moment format="DD MMM, YYYY">{experience.to}</Moment>
                  ) : (
                    " Current"
                  )}
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Experience;
