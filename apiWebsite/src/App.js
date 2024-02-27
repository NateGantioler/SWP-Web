import './App.css';
import Logo from './components/Logo';
import MainTextBox from './components/MainTextBox';
import MyButton from './components/MyButton';


function App() {
  return (
    <div class="bg-rose-bg w-screen h-screen absolute pl-10">
      <Logo/>
      <MainTextBox/>
      <MyButton/>
    </div>
  );
}

export default App;
