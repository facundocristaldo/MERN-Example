import React from "react";
import { useSelector } from "react-redux";

function Alert() {
  const alertState = useSelector((state) => state.alert);
  if (!alertState || alertState.length === 0) {
    return null;
  }
  const alerts = alertState.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));
  return alerts;
}

export default Alert;
