import { Meta, StoryFn } from "@storybook/react";
import { TrustBoxWidget } from "../components/TrustBoxWidget";
import { TrustPilotProvider } from "../context/TrustpilotProvider";
import React from "react";
import { TrustBoxWidgetAttributesPropsT } from "../interface/trust-box.types";

export default {
  title: "TrustPilot/ReviewCollector",
  decorators: [
    (Story) => (
      <TrustPilotProvider>
        <Story />
      </TrustPilotProvider>
    ),
  ],
} as Meta;

export const ReviewCollector: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.ReviewCollector {...args} />;
};
ReviewCollector.args = {};
