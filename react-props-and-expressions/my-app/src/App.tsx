import { CustomButton } from './CustomButton';
import './CustomButton.css';

function App() {
  return (
    <div className="center">
      <CustomButton text="I" color="red" />
      <CustomButton text="know" color="green" />
      <CustomButton text="React!" color="lightblue" />
    </div>
  );
}

export default App;
