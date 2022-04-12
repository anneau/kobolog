import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Container } from "./Container";

export default {
  title: "Container",
  component: Container,
  argTypes: {
    center: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args}>
    <p>This is text in container</p>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  center: false,
};
