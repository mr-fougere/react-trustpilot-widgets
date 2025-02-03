import { Meta, StoryFn } from "@storybook/react";
import { TrustBoxWidget } from "../components/TrustBoxWidget";
import { TrustpilotWidgetProvider } from "../context/TrustpilotWidgetProvider";
import React from "react";
import {
  TrustBoxWidgetAttributesPropsT,
  TrustBoxWidgetBasicAttributesProps,
} from "../interface/trust-box.types";

export default {
  title: "Trustpilot/Essentials",
  decorators: [
    (Story) => (
      <TrustpilotWidgetProvider>
        <Story />
      </TrustpilotWidgetProvider>
    ),
  ],
} as Meta;

export const HorizontalWidget: StoryFn<TrustBoxWidgetBasicAttributesProps> = (
  args: TrustBoxWidgetBasicAttributesProps
) => {
  return <TrustBoxWidget.Horizontal {...args} />;
};
HorizontalWidget.args = {};

export const MicroButtonWidget: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.MicroButton {...args} />;
};
MicroButtonWidget.args = {};

export const MicroComboWidget: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.MicroCombo {...args} />;
};
MicroComboWidget.args = {};

export const MicroReviewCountWidget: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.MicroReviewCount {...args} />;
};
MicroReviewCountWidget.args = {
  minReviewCount: 0,
  styleAlignment: "center",
};

export const MicroStarWidget: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.MicroStar {...args} />;
};
MicroStarWidget.args = {};

export const MiniWidget: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.Mini {...args} />;
};
MiniWidget.args = {};

export const StarterWidget: StoryFn<TrustBoxWidgetAttributesPropsT> = (
  args: TrustBoxWidgetAttributesPropsT
) => {
  return <TrustBoxWidget.Starter {...args} />;
};
StarterWidget.args = {};
