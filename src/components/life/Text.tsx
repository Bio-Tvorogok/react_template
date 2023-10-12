import React from "react";
import {UserComponent} from "@craftjs/core";

type TextProps = {
  text: string
  fontSize: number
}

export const Text: UserComponent<TextProps> = ({text, fontSize}) => {
  return (
    <div>
      <p style={{fontSize}}>{text}</p>
    </div>
  )
}