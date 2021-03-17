import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../store/actions/creators/Profile";
const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
