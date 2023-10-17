import React, {PropsWithChildren} from "react";
import { Paper } from "@material-ui/core";
import {useNode, UserComponent} from "@craftjs/core";

type ContainerPops = {
  background: string
  padding: number
}

export const Container: UserComponent<PropsWithChildren<ContainerPops>> = ({background, padding = 0, children}) => {
  const { connectors: {connect, drag} } = useNode();

  return (
    <Paper ref={ref => connect(drag(ref as HTMLElement))} style={{margin: "5px 0", background, padding: `${padding}px`}}>
      {children}
    </Paper>
  )
}