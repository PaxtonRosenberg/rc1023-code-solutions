import { FaAlignJustify } from 'react-icons/fa';
import { useState } from 'react';

interface AppDrawerProps {
  menuItems: string[];
}

export default function AppDrawer({ menuItems }: AppDrawerProps) {
  const [menuClick, setMenuClicked] = useState(false);

  function handleMenuIconClick() {
    !menuClick ? setMenuClicked(true) : setMenuClicked(false);
  }

  return (
    <div
      className={menuClick ? 'container overlay' : 'container'}
      onClick={handleMenuIconClick}>
      <HamburgerMenuIcon onClick={handleMenuIconClick} />
      <MenuItems menuItems={menuItems} />
    </div>
  );
}

interface HamburgerMenuIconProps {
  onClick: () => void;
}

function HamburgerMenuIcon({ onClick }: HamburgerMenuIconProps) {
  return <FaAlignJustify className="hamburgerMenu" onClick={onClick} />;
}

interface MenuItemsProps {
  menuItems: string[];
}

function MenuItems({ menuItems }: MenuItemsProps) {
  const games = menuItems.map((game, index) => {
    return <li key={index}>{game}</li>;
  });
  return (
    <div className="menu">
      <h3>Choose a Game</h3>
      <ul>{games}</ul>
    </div>
  );
}
