// @flow
import * as React from 'react';
import {Grid, Paper} from "@material-ui/core";
import {Container} from "./life/Container";
import {Card} from "./life/Card";
import {Button} from "./life/Button";
import {Toolbox} from "./tools/ToolBox";
import {SettingsPanel} from "./tools/SettingsPanel";
import {Text} from "./life/Text";
import {Element, Frame} from "@craftjs/core";
import {Topbar} from "./tools/TopBar";

type Props = {

};
export const DevConstructorContainer = (props: Props) => {
  return (
    <Grid container spacing={3}>
      <Topbar />
      <Grid item xs>
        <Frame>
          <Element padding={5} background="#eee" is={Container} canvas>
            <Card background={"white"} />
            <Button size={"small"} text={"hi lol"}>Click</Button>
            <Text fontSize={2} text={"hi text"} />
            <Element padding={5} background="#eee" is={Container} canvas>
              <Text fontSize={2} text={"hi text"} />
            </Element>
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
  );
};