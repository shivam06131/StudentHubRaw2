import React from "react";
import FirstPage from "./Components/FirstPage";
import { BrowserRouter, Route } from "react-router-dom";
import SecondPage from "./Components/SecondPage";
import ThridPage from "./Components/ThirdPage";
import CreateData from "./Components/CreateData";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={FirstPage} />
        <Route path="/content/:subCode" exact component={SecondPage} />
        <Route
          path="/content/:subCode/:chapterNo"
          exact
          component={ThridPage}
        />
        <Route exact path="/create" component={CreateData} />
      </div>
    </BrowserRouter>
  );
};

export default App;
