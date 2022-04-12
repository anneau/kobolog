import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Text } from "./Text";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    color: {
      options: ["gray", "white"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "base", "lg", "xl", "2xl"],
      control: { type: "select" },
    },
    wight: {
      options: ["light", "normal", "medium", "semibold", "bold"],
      control: { type: "select" },
    },
    align: {
      options: ["center", "left", "right", "justify"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "gray",
  children: "Base",
  size: "base",
  wight: "normal",
  align: "left",
};
