import { Fragment } from "react";
import Moment from "react-moment";

const Education = ({ education }) => {
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
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Education;
