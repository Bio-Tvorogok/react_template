import React from 'react';
import {Typography, Paper, Grid} from '@material-ui/core';

import {Container} from "./components/life/Container";
import {Text} from "./components/life/Text";
import {Button} from "./components/life/Button";
import {Card} from "./components/life/Card";
import {Topbar} from "./components/tools/TopBar";
import {Toolbox} from "./components/tools/ToolBox";
import {SettingsPanel} from "./components/tools/SettingsPanel";
import {Editor} from "@craftjs/core";


function App() {
  return (
    <div style={{margin: "0 auto", width: "800px"}}>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
      <Editor resolver={{
        Text,
        Button,
        Card,
        Container
      }}>
      </Editor>
    </div>
  );
}
export default App;
