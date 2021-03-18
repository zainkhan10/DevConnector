import { Fragment } from "react";
import { useDispatch } from "react-redux";
import Moment from "react-moment";
import { deleteExperience } from "../../store/actions/creators";

const Experience = ({ experiences }) => {
  const dispatch = useDispatch();
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
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteExperience(experience._id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Experience;
