import { icon, top, middle, bottom, active } from "./hamburger_menu.module.scss";

const HamburgerMenu = () => {
  return (
    <svg
      x="0"
      y="0"
      viewBox="0 0 96 96"
      strokeWidth={7}
      strokeLinecap="round"
      strokeMiterlimit={10}
      className={icon}
    >
      <line className={top} x1="4" y1="12" x2="92" y2="12" />
      <line className={middle} x1="4" y1="48" x2="92" y2="48" />
      <line className={bottom} x1="4" y1="84" x2="92" y2="84" />
    </svg>
  );
};

export default HamburgerMenu;
