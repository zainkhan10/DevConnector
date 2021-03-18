import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { addEducation } from "../../store/actions/creators";

const AddEducation = ({ history }) => {
  const dispatch = useDispatch();
  const [toDateDisabled, toggleToDateDisable] = useState(false);
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = ({ target }) =>
    setFormData({ ...formData, [target.name]: target.value });

  const onSubmit = (ev) => {
    ev.preventDefault();
    dispatch(addEducation(formData, history));
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Add Your Education</h1>
      <p className="lead">
        <i className="fas fa-code-branch"></i> Add any school, bootcamp, etc
        that you have attended
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or bootcamp"
            value={school}
            onChange={onChange}
            name="school"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Degree or certificate"
            value={degree}
            onChange={onChange}
            name="degree"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Field of Study"
            value={fieldofstudy}
            onChange={onChange}
            name="fieldofstudy"
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={onChange} />
        </div>
        <div className="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              value={current}
              onChange={({ target }) => {
                setFormData({ ...formData, current: !current });
                toggleToDateDisable(!toDateDisabled);
              }}
              checked={current}
            />{" "}
            Current Job
          </p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            disabled={toDateDisabled}
            value={to}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description}
            onChange={onChange}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

export default withRouter(AddEducation);
