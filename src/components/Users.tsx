import React from "react";
import { CompanyContext } from "../contexts/CompanyContext.tsx";
import styles from "./Users.module.css";
import { UnitContext } from "../contexts/UnitContext.tsx";
import { UserContext } from "../contexts/UserContext.tsx";

function Users() {
  const { companies } = React.useContext(CompanyContext);
  const { allUnits } = React.useContext(UnitContext);
  const { filteredUsers } = React.useContext(UserContext);

  return (
    <div className="container">
      <h2>Users</h2>
      {!!filteredUsers.length &&
        filteredUsers.map((user) => (
          <div
            className={`${styles.userContainer} info-background-color`}
            key={user.id}
          >
            <p className={styles.email}>
              <b>Name:</b> {user.name}
            </p>
            <p className={styles.email}>
              <b>E-mail:</b> {user.email}
            </p>
            <p>
              <b>Unit:</b>{" "}
              {allUnits.filter((unit) => unit.id === user.unitId)[0].name} -{" "}
              {
                companies.filter((company) => company.id === user.companyId)[0]
                  .name
              }
            </p>
          </div>
        ))}
    </div>
  );
}

export default Users;
