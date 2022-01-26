import { FC } from "react";
import IonIcon from "@reacticons/ionicons";
import SidebarSettings from "components/Layout/SidebarSettings";

const BalanceManage: FC = () => {
  return (
    <>
      <div className="setting__menu__mobile">
        <span className="setting__menu__outline">
          <IonIcon className="icon icon-menu-outline" name="menu-outline" />
        </span>
        <span className="setting__menu__close">
          <IonIcon className="icon icon-close-outline" name="close-outline" />
        </span>
      </div>
      <div className="setting__body">
        <div className="setting__sidebar">
          <SidebarSettings />
        </div>
        <div className="setting__content">
          <div className="setting__title h5">Balance fluctuations</div>
          <div className="settings_row">
            <div className="table-reponsive">
              <table className="table-latitude">
                <thead>
                  <tr>
                    <th>TIME</th>
                    <th>MONEY</th>
                    <th>MESSAGE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>19/11/2021 04:22:26</td>
                    <td>+ $50,00</td>
                    <td>
                      <span>Cancel Duo</span>
                    </td>
                  </tr>
                  <tr>
                    <td>19/10/2021 04:22:26</td>
                    <td>- $25,00</td>
                    <td>
                      <span>Rent player</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BalanceManage;