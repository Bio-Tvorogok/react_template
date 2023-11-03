import React, {useEffect, useState} from 'react';
import {Typography, Paper, Grid} from '@material-ui/core';

import {Container} from "./components/dev/life/Container";
import {Text} from "./components/dev/life/Text";
import {Button} from "./components/dev/life/Button";
import {Card, CardTop, CardBottom} from "./components/dev/life/Card";
import {Editor, Element, Frame} from "@craftjs/core";
import {isDev} from "./env";
import {DevConstructorContainer} from "./dev/components/DEV_ConstructorContainer";
import {fetchTemplate} from "./shared/api";
import {Topbar} from "./components/dev/tools/TopBar";
import {Toolbox} from "./components/dev/tools/ToolBox";
import {SettingsPanel} from "./components/dev/tools/SettingsPanel";
import lz from "lzutf8";


function App() {
  const [json, setJson] = useState<string | undefined>();

  useEffect(() => {
    fetchTemplate()
      .then(response => {
        console.log(response)
        // debugger
        const jsonData = lz.decompress(lz.decodeBase64(response.payload));
        setJson(jsonData);
      })
      .catch(error => {
        alert(error)
      })
  }, []);

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
      }} enabled={true}>
        <Grid container spacing={3}>
          <Topbar />
          <Grid item xs>
            <Frame json={json}>
              <Element padding={5} background="#eee" is={Container} canvas>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>

        {/*{ isDev && (*/}
        {/*  <DevConstructorContainer/>*/}
        {/*)}*/}
      </Editor>
    </div>
  );
}
export default App;
