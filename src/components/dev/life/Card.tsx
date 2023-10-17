import React, {PropsWithChildren} from "react";
import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";
import {Element, useNode, UserComponent} from "@craftjs/core";

type CardProps = {
  background: string
  padding?: number
}

export const CardTop: UserComponent<PropsWithChildren> = ({children}) => {
  const { connectors: {connect} } = useNode();
  return (
    // @ts-ignore
    <div ref={connect}>
      {children}
    </div>
  )
}

CardTop.craft = {
  rules: {
    canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Text)
  }
}

export const CardBottom: UserComponent<PropsWithChildren> = ({children}) => {
  const { connectors: {connect} } = useNode();
  return (
    // @ts-ignore
    <div ref={connect}>
      {children}
    </div>
  )
}

CardBottom.craft = {
  rules: {
    canMoveIn : (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Button)
  }
}

export const Card: UserComponent<CardProps> = ({background, padding = 20}) => {
  return (
    <Container background={background} padding={padding}>
      <Element id="text" is={CardTop} canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element id="buttons" is={CardBottom} canvas>
        <Button size="small" text="Learn more" variant="contained" color="primary" />
      </Element>
    </Container>
  )
}