// src/App.js
import React from "react";

import Imad from './imad/imad';
import Nasro from './Nasro/Nasro';
import Mokhlis from './Mokhlis/index';
import TeamPage from "./TeamPage/TeamPage";

function App() {
  return (
    <div>
      <h2>Main App</h2>

      {/* TeamPage (from develop) */}
      <TeamPage />

      {/* Individual member components (from feature branch) */}
      <hr />

      <div>
        <Nasro />
        <Imad />
        <Mokhlis />
      </div>
    </div>
  );
}

export default App;
