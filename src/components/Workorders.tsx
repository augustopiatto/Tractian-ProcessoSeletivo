import {
  AssetsInterface,
  UsersInterface,
  WorkordersInterface,
} from "../commons/types.tsx";
import styles from "./Workorders.module.css";
import type { CollapseProps } from "antd";
import { Collapse, Badge } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import {
  setWorkorderPriorityColor,
  setWorkorderStatusColor,
} from "../helpers/helpers.tsx";

interface IProps {
  assets: AssetsInterface[];
  users: UsersInterface[];
  workorders: WorkordersInterface[];
}

function Workorders({ assets, users, workorders }: IProps) {
  const workordersItems: CollapseProps["items"] = workorders.map(
    (workorder) => {
      return {
        key: workorder.id,
        label: (
          <div className={styles.labelContainer}>
            <div className={styles.label}>
              <h3>{workorder.title}</h3>
              <Badge
                count={workorder.priority}
                color={setWorkorderPriorityColor(workorder.priority)}
              />
            </div>
            <div>
              <Badge
                count={workorder.status}
                color={setWorkorderStatusColor(workorder.status)}
              />
            </div>
          </div>
        ),
        children: (
          <div className={styles.detailsContainer}>
            <p>
              <b>Asset: </b>
              {assets.filter((asset) => asset.id === workorder.assetId)[0].name}
            </p>
            <p>
              <b>Description: </b>
              {workorder.description}
            </p>
            <ul>
              <b>Assigned Users: </b>
              {workorder.assignedUserIds.map((assignedUserId) => (
                <li key={assignedUserId}>
                  {users.filter((user) => user.id === assignedUserId)[0].name}
                </li>
              ))}
            </ul>
            <ul>
              <b>Checklist: </b>
              {workorder.checklist.map((checklist) => (
                <li key={checklist.task}>
                  Task: {checklist.task}{" "}
                  {checklist.completed ? (
                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                  ) : (
                    <CloseCircleTwoTone twoToneColor="#f5222d" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ),
      };
    }
  );

  return (
    <div className="container">
      <h2>Workorders</h2>
      {!!workorders.length && <Collapse items={workordersItems} size="small" />}
    </div>
  );
}

export default Workorders;
