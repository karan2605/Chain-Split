import Dashboard from "./components/Dashboard";
import Friends from "./components/Friends";
import Groups from "./components/Groups";
import SplitHistory from "./components/SplitHistory";
import CreateAccount from "./components/CreateAccount";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

function App() {
  const globalData = new Blob(
    [
      JSON.stringify({
        account: null,
        picture: null,
        phoneNumber: null,
        friends: [],
        groups: {},
        received: 0,
        contributed: 0,
        active: 0
      }),
    ],
    { type: "application/json" }
  );

  const cid = null

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard globalData={globalData} globalcid={cid}/>} />
          <Route path="/friends" element={<Friends globalData={globalData} globalcid={cid} />} />
          <Route path="/groups" element={<Groups globalData={globalData} globalcid={cid} />} />
          <Route path="/history" element={<SplitHistory globalData={globalData} globalcid={cid} />} />
          <Route path="/createAccount" element={<CreateAccount globalData={globalData} globalcid={cid} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
