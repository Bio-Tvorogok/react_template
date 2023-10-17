import React from "react";
import {useNode, UserComponent} from "@craftjs/core";

type TextProps = {
  text: string
  fontSize: number
}

export const Text: UserComponent<TextProps> = ({text, fontSize}) => {
  const { connectors: {connect, drag} } = useNode();
  return (
    <div ref={ref => connect(drag(ref as HTMLElement))}>
      <p style={{fontSize}}>{text}</p>
    </div>
  )
}