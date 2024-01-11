import AppDrawer from './AppDrawer';
import './App.css';

function App() {
  const menuItems = [
    'The Legend of Zelda',
    'A Link to the Past',
    'Ocarina of Time',
    'The Wind Waker',
    'Breath of the Wild',
  ];

  return (
    <>
      <AppDrawer menuItems={menuItems} />
    </>
  );
}

export default App;
