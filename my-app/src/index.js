import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropUse from './chapter5/5.3/PropUse';
import Comment from './chapter5/5.6/Comment';
import CommentList from './chapter5/CommentList';
import NotificationList from './chapter6/NotificationList';
import Counter from './chapter7/7.2/Counter';
import CounterEffect from './chapter7/7.3/CounterEffect';
import SetStateMerge from './chapter7/7.2/SetStageMerge';
import EffectSummary from './chapter7/7.3/EffectSummary';
import EffectContainer from './chapter7/7.3/EffectContainer';
import Timer from './chapter7/7.3/Timer';
import TimerContainer from './chapter7/7.3/TimerContainer';
import HeavyCalculator from './chapter7/7.4/HeavyCalculator';
import ParentComponent from './chapter7/7.5/ParentComponent';
import TextInputWithFocusButton from './chapter7/7.6/TextInputWithFocusButton';
import ComponentVariable from './chapter7/7.6/ComponentVariable';
import UserStatusEx from './chapter7/7.8/ex1/UserStatusEx';
import InputContainer from './chapter7/7.8/ex2/InputContainer';
import Accommodate from './chapter7/7.8/Accommodate';
import Toggle from './chapter8/8.1/Toggle';
import MyButton from './chapter8/8.2/MyButton';
import ConfirmButton from './chapter8/ConfirmButton';
import Greeting from './chapter9/9.1/Greeting';
import LoginControl from './chapter9/9.2/LoginControl';
import Mailbox from './chapter9/9.3/Mailbox';
import LoginControlRefactoring from './chapter9/9.3/LoginControlRefactoring';
import MainPage from './chapter9/9.4/MainPage';
import Toolbar from './chapter9/9.4/Toolbar';
import LandingPage from './chapter9/9.4/LandingPage';
import NumberList from './chapter10/10.1/NumberList';
import AttendanceBook from './chapter10/AttendanceBook';
import MainForm from './chapter11/11.2/MainForm';
import EssayForm from './chapter11/11.3/EssayForm';
import FlavorForm from './chapter11/11.3/FlavorForm';
import FileInput from './chapter11/11.3/FileInput';
import Reservation from './chapter11/11.4/Reservation';
import ReservationRefactoring from './chapter11/11.4/ReservationRefactoring';
import SignUp from './chapter11/SignUp';
import Calculator from './chapter12/Calculator';
import WelcomeDialog from './chapter13/13.1.1.1/WelcomeDialog';
import SplitPaneSection from './chapter13/13.1.1.2/SplitPaneSection';
import DialogContainer from './chapter13/13.1.2/DialogContainer';
import SignUpDialog from './chapter13/13.1.3/SignUpDialog';
import ProfileCard from './chapter13/ProfileCard';
import MainContent from './chapter14/MainContent';
import DarkOrLight from './chapter14/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );

// 3장 예제
// root.render(
//   // <JsxUse />
//   <Library />
// );

// 4장 예제
// 1초 마다 Clock 컴포넌트를 root div에 렌더링 하는 코드
// setInterval(() => {
//   root.render(
//     <Clock />
//   );
// }, 1000);

// 6장 예제
// root.render(
//   <NotificationList />
// );

// 7장 예제
// root.render(
//   // <EffectSummary />
//   // <EffectContainer />
//   // <TimerContainer />
//   // <HeavyCalculator />
//   // <ParentComponent />
//   // <TextInputWithFocusButton />
//   // <ComponentVariable />
//   // <InputContainer />
//   <Accommodate />
// );

// 8장 예제
// root.render(

//   // <Toggle />
//   // <MyButton />
//   // <ConfirmButton />
// );

// 9장 예제
const messages = ['React', 'RE: React','RE:RE: React' ]
// const messages = []
// root.render(

//   // <Greeting isLoggedIn = {true} />
//   // <Greeting isLoggedIn = {false} />
//   // <LoginControl />
//   // <Mailbox unreadMessages={messages} />
//   // <LoginControlRefactoring />
//   // <MainPage />
//   // <LandingPage />
// );

// 10장 예제
const numbers = [1,2,3,4,5];
// root.render(

//   // <NumberList numbers = {numbers} />
//   // <AttendanceBook  />
// );

// 11장 예제
// root.render(

//   // <Toggle />
//   // <MyButton />
//   // <MainForm />
//   // <EssayForm />
//   // <FlavorForm />
//   // <FileInput />
//   // <Reservation />
//   // <ReservationRefactoring />
//   // <SignUp/>
// );

// 12장 예제
// root.render(

//   // <Calculator  />
//   // <WelcomeDialog  />
//   // <SplitPaneSection  />
//   // <DialogContainer />
//   <SignUpDialog />
// );

// 13장 예제
// root.render(

//   <ProfileCard />
// );

// 14장 예제
root.render(

  // <ProfileCard />
  // <MainContent />
  <DarkOrLight />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
