import React from 'react';
import {Typography, Paper, Grid} from '@material-ui/core';

import {Container} from "./components/dev/life/Container";
import {Text} from "./components/dev/life/Text";
import {Button} from "./components/dev/life/Button";
import {Card, CardTop, CardBottom} from "./components/dev/life/Card";
import {Topbar} from "./components/dev/tools/TopBar";
import {Toolbox} from "./components/dev/tools/ToolBox";
import {SettingsPanel} from "./components/dev/tools/SettingsPanel";
import {Editor} from "@craftjs/core";
import {isDev} from "./env";
import {DevConstructorContainer} from "./components/dev/DEV_ConstructorContainer";


function App() {
  return (
    <div style={{margin: "0 auto", width: "800px"}}>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
      <Editor resolver={{
        Text,
        Button,
        Card,
        Container,
        CardTop,
        CardBottom
      }}>
        { isDev && (
          <DevConstructorContainer/>
        )}
      </Editor>
    </div>
  );
}
export default App;
