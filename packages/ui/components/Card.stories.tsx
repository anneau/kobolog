import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <p className="text-white">This is text in card</p>
  </Card>
);

export const Default = Template.bind({});
Default.args = {};
