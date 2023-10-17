import React, {PropsWithChildren} from "react";
import {Button as MaterialButton, ButtonProps as MaterialButtonProps} from "@material-ui/core";
import {useNode, UserComponent} from "@craftjs/core";

interface ButtonProps extends MaterialButtonProps {
  text: string
}

export const Button: UserComponent<PropsWithChildren<ButtonProps>> = ({text, ...rest}) => {
  const { connectors: {connect, drag} } = useNode();

  return (
    <MaterialButton ref={ref => connect(drag(ref as HTMLElement))} {...rest}>
      {text}
    </MaterialButton>
  )
}