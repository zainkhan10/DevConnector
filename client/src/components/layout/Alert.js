import { useSelector } from "react-redux";

const Alert = () => {
  const alerts = useSelector(({ alert }) => alert);
  return (
    alerts &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <div className={`alert alert-${alert.alertType}`} key={alert.id}>
        {alert.msg}
      </div>
    ))
  );
};

export default Alert;
