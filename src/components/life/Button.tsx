import React, {PropsWithChildren} from "react";
import {Button as MaterialButton, ButtonProps as MaterialButtonProps} from "@material-ui/core";
import {UserComponent} from "@craftjs/core";

interface ButtonProps extends MaterialButtonProps {
  text: string
}

export const Button: UserComponent<PropsWithChildren<ButtonProps>> = ({text, ...rest}) => {
  return (
    <MaterialButton {...rest}>
      {text}
    </MaterialButton>
  )
}