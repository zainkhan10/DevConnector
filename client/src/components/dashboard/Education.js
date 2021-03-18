import { Fragment } from "react";
import { useDispatch } from "react-redux";
import Moment from "react-moment";
import { deleteEducation } from "../../store/actions/creators";

const Education = ({ education }) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {education &&
            education.map((edu) => (
              <tr key={edu._id}>
                <td>{edu.school}</td>
                <td className="hide-sm">{edu.degree}</td>
                <td className="hide-sm">
                  <Moment format="DD MMM, YYYY">{edu.from}</Moment> -
                  {edu.to ? (
                    <Moment format="DD MMM, YYYY">{edu.to}</Moment>
                  ) : (
                    " Current"
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteEducation(edu._id))}
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

export default Education;
