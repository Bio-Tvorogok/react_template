import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";
import {useEditor} from "@craftjs/core";
import {Button} from "../life/Button";
import {Text} from "../life/Text";
import {Container} from "../life/Container";
import {Card} from "../life/Card";

export const Toolbox = () => {
  const { connectors, query } = useEditor()

  return (
    <Box px={2} py={2}>
      <Grid container direction="column"  alignItems="center" justifyContent="center" spacing={1}>
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref as HTMLElement, <Button size={"small"} text={"new button"} />)}
            variant="contained">Button
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref as HTMLElement, <Text fontSize={20} text={"new text"} />)}
            variant="contained">Text</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref as HTMLElement, <Container padding={5} background={"white"} />)}
            variant="contained">Container</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={ref => connectors.create(ref as HTMLElement, <Card background={"white"} />)}
            variant="contained">Card</MaterialButton>
        </Grid>
      </Grid>
    </Box>
  )
};