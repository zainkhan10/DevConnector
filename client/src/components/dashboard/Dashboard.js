import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../store/actions/creators";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, profile } = useSelector(({ profile }) => profile);
  const { user } = useSelector(({ auth }) => auth);
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome {user && user.name}
      </p>
      {profile ? (
        <Fragment>
          <DashboardActions />
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-primary my-1">Create Profile</Link>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Dashboard;
