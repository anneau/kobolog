import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ExternalLink } from "./ExternalLink";

export default {
  title: "ExternalLink",
  component: ExternalLink,
  argTypes: {
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
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = (args) => (
  <ExternalLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Base",
  size: "base",
  wight: "normal",
  align: "left",
};
