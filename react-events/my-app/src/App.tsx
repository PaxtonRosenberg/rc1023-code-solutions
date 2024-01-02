import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text: string) {
    window.alert(text);
  }
  return (
    <div className="center">
      <CustomButton text="This" color="red" onCustomClick={handleCustomClick} />
      <CustomButton text="is" color="blue" onCustomClick={handleCustomClick} />
      <CustomButton
        text="cool"
        color="green"
        onCustomClick={handleCustomClick}
      />
    </div>
  );
}

export default App;
