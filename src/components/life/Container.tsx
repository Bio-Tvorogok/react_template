import React, {PropsWithChildren} from "react";
import { Paper } from "@material-ui/core";
import {UserComponent} from "@craftjs/core";

type ContainerPops = {
  background: string
  padding: number
}

export const Container: UserComponent<PropsWithChildren<ContainerPops>> = ({background, padding = 0, children}) => {
  return (
    <Paper style={{margin: "5px 0", background, padding: `${padding}px`}}>
      {children}
    </Paper>
  )
}