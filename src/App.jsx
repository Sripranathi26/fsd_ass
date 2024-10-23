import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import LeftSideBar from "./components/layout/LeftSideBar";
import RightSideBar from "./components/layout/RightSideBar";
import UserProfile from "./components/props/UserProfile";
import Parent from "./components/props/propsAsMethod/Parent";
import ChildrenContainer from "./components/props/ChildrenContainer";
import SingleCounter from "./components/state/SingleCounter";
import MultiCounter from "./components/state/MultiCounter";
import ArrayWithoutKey from "./components/listRendering/ArrayWithoutKey";
import IndexAsKeyIssue from "./components/listRendering/IndexAsKeyIssue";
import ObjectWithIdAsKey from "./components/listRendering/ObjectWithIdAsKey";
import ObjectWithoutId from "./components/listRendering/ObjectWithoutId";
import ArrayWithKeyAsIndex from "./components/ListRendering/ArrayWithKeyAsIndex";
import CssStyleSheet from "./components/cssStyles//CssStylesheet";
import InlineCss from "./components/cssStyles/InlineCss";
import CssModule from "./components/cssStyles/CssModule";
import ThemeStyledComponent from "./components/cssStyles/theme/ThemeStyledComponent";
import Profile from "./components/FormInputs/Profile";
import StyleComponent from "./components/cssStyles/styledComponents/Component";
import { useTheme } from "styled-components";
import UseEffectCounters from "./components/useEffect/UseEffectCounters";
import JokesContainer from "./components/useEffect/apiFetch/JokesContainer";

function App() {
  return (
    <>
      {/* Basic Layout */}
      {/* <Header />

      <div className="main-content">
        <LeftSideBar />
        <Main />
        <RightSideBar />
      </div>

      <Footer /> */}

      {/* props example */}
      {/* <section className="profile-card">
        <UserProfile
          name="Dineshkumar"
          age={33}
          email="dinesh@gmail.com"
          address="Chennai"
        />
        <UserProfile
          name="Divya Dineshkumar"
          age={30}
          email="divya@gmail.com"
          address="Chennai"
        />
        <UserProfile
          name="Darwin Divya Dinesh"
          age={3}
          email="ddd@gmail.com"
          address="Chennai"
        />
      </section> */}

      {/* props as method */}
      {/* <Parent /> */}

      {/* children */}
      {/* <ChildrenContainer name="Dineshkumar">
        <h3>Welcome to Dashboard</h3>
        <p>This area is to display the main features</p>
      </ChildrenContainer>

      <ChildrenContainer name="Dineshkumar">
        <h3>Welcome to Profile</h3>
        <p>This area is to display the user profile details</p>
        <p>Manage your preferences and edit your profile at ease</p>
      </ChildrenContainer> */}

      {/* state */}
      {/* <SingleCounter initialvalue={0} incrementValue={1} />
      <SingleCounter initialvalue={0} incrementValue={5} />
      <SingleCounter initialvalue={0} incrementValue={10} /> */}
      {/* <MultiCounter /> */}

      {/* list rendering */}
      {/* <div className="list-rendering">
        <h1>React List Rendering Examples</h1>
        <ArrayWithoutKey />
        <ArrayWithKeyAsIndex />
        <ObjectWithIdAsKey />
        <ObjectWithoutId />
        <IndexAsKeyIssue />
      </div> */}

      {/* form handling */}
      {/* <Profile /> */}

      {/* css styling */}
      {/* <CssStyleSheet />
      <InlineCss />
      <CssModule />
      <StyleComponent />
      <ThemeStyledComponent /> */}

      {/* use effect  */}
      {/* <UseEffectCounters /> */}
      <JokesContainer />
    </>
  );
}

export default App;
