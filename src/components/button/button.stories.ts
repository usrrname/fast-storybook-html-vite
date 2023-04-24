import { HTMLTemplateTag, ViewTemplate, html } from "@microsoft/fast-element";
import type { Button } from "./button.js";
import { ButtonType } from "@microsoft/fast-foundation";
import type { Meta } from "@storybook/html";
import { StoryObj, StoryArgs, createStory } from "../../__test__/helpers.js";
import './define.js';

interface ButtonArgs extends Button {
  id: string,
  storyContent: ViewTemplate<Button> | HTMLTemplateTag | string;
};

const storyTemplate = html<StoryArgs<ButtonArgs>>`
    <fast-button
        id="${x => x.id}"
        autofocus="${x => x.autofocus}"
        ?disabled="${x => x.disabled}"
        ?formnovalidate="${x => x.formnovalidate}"
        form="${x => x.formId}"
        formaction="${x => x.formaction}"
        formenctype="${x => x.formenctype}"
        formmethod="${x => x.formmethod}"
        formtarget="${x => x.formtarget}"
        name="${x => x.name}"
        type="${x => x.type}"
        value="${x => x.value}"
    >
        ${x => x.storyContent}
    </fast-button>
`;

const metadata = {
  title: "Components/Button",
  args: {
    autofocus: false,
    disabled: false,
    storyContent: "Button"
  },
  argTypes: {
    autofocus: { control: "boolean" },
    disabled: { control: "boolean" },
    formaction: { control: "text" },
    formenctype: { control: "text" },
    formId: { control: "text" },
    formmethod: { control: "text" },
    formnovalidate: { control: "boolean" },
    formtarget: { control: "text" },
    inputValue: { table: { disable: true } },
    name: { control: "text" },
    type: { control: "select", options: Object.values(ButtonType) },
    value: { control: "text" },
    ariaAtomic: { control: "text" },
    ariaBusy: { control: "text" },
    ariaControls: { control: "text" },
    ariaCurrent: { control: "text" },
    ariaDescribedby: { control: "text" },
    ariaDetails: { control: "text" },
    ariaDisabled: { control: "text" },
    ariaErrormessage: { control: "text" },
    ariaExpanded: { control: "text" },
    ariaFlowto: { control: "text" },
    ariaHaspopup: { control: "text" },
    ariaHidden: { control: "text" },
    ariaInvalid: { control: "text" },
    ariaKeyshortcuts: { control: "text" },
    ariaLabel: { control: "text" },
    ariaLabelledby: { control: "text" },
    ariaLive: { control: "text" },
    ariaOwns: { control: "text" },
    ariaPressed: { control: "text" },
    ariaRelevant: { control: "text" },
    ariaRoledescription: { control: "text" },
    storyContent: { table: { disable: true } },
  },
  parameters: {
    docs: {

    }
  }
} as Meta<ButtonArgs>;

export default metadata;

type Story = StoryObj<ButtonArgs>

export const FirstStory: Story = {
  name: "Button",
  render: createStory(storyTemplate)
}

export const Disabled: Story = {
  name: "Disabled",
  args: {
    disabled: true
  },
  render: createStory(storyTemplate)
}