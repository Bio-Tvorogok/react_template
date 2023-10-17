import React, {useState} from "react";
import {Box, FormControlLabel, Switch, Grid, Button as MaterialButton, Snackbar} from "@material-ui/core";
import lz from "lzutf8";
import copy from 'copy-to-clipboard';
import {useEditor} from "@craftjs/core";

export const Topbar = () => {
  const { query } = useEditor((state) => ({
    enabled: state.options.enabled
  }));
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");

  return (
    <Box px={1} py={1} mt={3} mb={1} bgcolor="#cbe8e7">
      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            control={<Switch checked={true} />}
            label="Enable"
          />
        </Grid>
        <Grid item>
          <MaterialButton
            className="copy-state-btn"
            size="small"
            variant="outlined"
            color="secondary"
            onClick={() => {
              const json = query.serialize();
              copy(lz.encodeBase64(lz.compress(json)));
              setSnackbarMessage("State copied to clipboard")
            }}
          >
            Copy current state
          </MaterialButton>
          <Snackbar
            autoHideDuration={1000}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={!!snackbarMessage}
            onClose={() => setSnackbarMessage("")}
            message={<span>{snackbarMessage}</span>}
          />
        </Grid>
      </Grid>
    </Box>
  )
};