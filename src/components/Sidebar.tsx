/* eslint-disable no-undef */
import { FC } from "react";
import clsx from "clsx";
import IonIcon from "@reacticons/ionicons";
import Logo from "img/logo.png";
import LogoWhite from "img/logo-white.png";
import { Link } from "react-router-dom";
import { routesEnum } from "pages/Routes";

interface SidebarProps {
  classSidebar?: string;
}
const Sidebar: FC<SidebarProps> = ({ classSidebar }) => {
  return (
    <>
      <div className={clsx("sidebar", classSidebar)}>
        <div className="sidebar__top">
          <Link to={routesEnum.home} className="sidebar__logo">
            <img
              src={Logo}
              alt=""
              className="sidebar__pic sidebar__pic_black"
            />
            <img
              src={LogoWhite}
              alt=""
              className="sidebar__pic sidebar__pic_white"
            />
          </Link>
          <button className="sidebar__burger"></button>
          <button className="sidebar__close">
            <IonIcon className="icon icon-close-outline" name="close-outline" />
          </button>
        </div>
        <div className="sidebar__wrapper">
          <div className="sidebar__inner">
            <div className="sidebar__group">
              <div className="sidebar__caption caption-sm">
                <span></span>Menu
              </div>
              <ul className="sidebar-menu">
                <li className="sidebar-item">
                  <Link to={routesEnum.home} className="sidebar-header">
                    <IonIcon
                      className="icon icon-home-outline"
                      name="home-outline"
                    />
                    <span>Home</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to={routesEnum.following} className="sidebar-header">
                    <IonIcon
                      className="icon icon-person-outline"
                      name="person-outline"
                    />
                    <span>Following</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    to={routesEnum.playerProfile}
                    className="sidebar-header"
                  >
                    <IonIcon
                      className="icon icon-person-outline"
                      name="person-outline"
                    />
                    <span>Player Profile</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to={routesEnum.chat} className="sidebar-header">
                    <IonIcon
                      className="icon icon-chatbubble-outline"
                      name="chatbubble-outline"
                    />
                    <span>Chat</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to={routesEnum.login} className="sidebar-header">
                    <IonIcon
                      className="icon icon-person-circle-outline"
                      name="person-circle-outline"
                    />
                    <span>Sign-in</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to={routesEnum.register} className="sidebar-header">
                    <IonIcon
                      className="icon icon-person-circle-outline"
                      name="person-circle-outline"
                    />
                    <span>Sign-up</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <label htmlFor="" className="switch switch_theme js-switch-theme">
          <input type="checkbox" className="switch__input" />
          <span className="switch__in">
            <span className="switch__box"></span>
            <span className="switch__icon"></span>
            <IonIcon className="icon icon-moon-outline" name="moon-outline" />
            <IonIcon className="icon icon-sunny-outline" name="sunny-outline" />
          </span>
        </label>
      </div>
    </>
  );
};

export default Sidebar;