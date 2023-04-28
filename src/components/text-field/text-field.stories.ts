import { ViewTemplate, html } from '@microsoft/fast-element';
import { Meta, Story, StoryArgs, createStory } from '../../__test__/helpers.js';
import { TextFieldType } from '@microsoft/fast-foundation';
import { TextField } from './text-field.js';
import './define.js';

interface TextFieldArgs extends TextField {
  id: string;
  storyContent: ViewTemplate<TextField> | string | HTMLSlotElement;
}
const storyTemplate = html<StoryArgs<TextFieldArgs>>`
    <fast-text-field
        id="${(x) => x.id}"
        ?autofocus="${(x) => x.autofocus}"
        ?disabled="${(x) => x.disabled}"
        ?readonly="${(x) => x.readOnly}"
        ?required="${(x) => x.required}"
        ?spellcheck="${(x) => x.spellcheck}"
        list="${(x) => x.list}"
        maxlength="${(x) => x.maxlength}"
        minlength="${(x) => x.minlength}"
        name="${(x) => x.name}"
        pattern="${(x) => x.pattern}"
        placeholder="${(x) => x.placeholder}"
        resize="${(x) => x.resize}"
        size="${(x) => x.size}"
        tabindex="${(x) => (x.disabled ? null : '0')}"
        type="${(x) => x.type}"
        value="${(x) => x.value}"
    >
        ${(x) => x.storyContent}
    </fast-text-field>
`;

export default {
  title: 'Components/Text Field',
  args: {
    autofocus: false,
    disabled: false,
    readOnly: false,
    required: false,
    spellcheck: false,
  },
  argTypes: {
    autofocus: { control: 'boolean' },
    disabled: { control: 'boolean' },
    list: { control: 'text' },
    maxlength: { control: 'number' },
    minlength: { control: 'number' },
    name: { control: 'text' },
    pattern: { control: 'text' },
    placeholder: { control: 'text' },
    readOnly: { control: 'boolean' },
    required: { control: 'boolean' },
    size: { control: 'number' },
    spellcheck: { control: 'boolean' },
    type: { control: 'select', options: Object.values(TextFieldType) },
    value: { control: 'text' },
    ariaAtomic: { control: 'text' },
    ariaBusy: { control: 'text' },
    ariaControls: { control: 'text' },
    ariaCurrent: { control: 'text' },
    ariaDescribedby: { control: 'text' },
    ariaDetails: { control: 'text' },
    ariaDisabled: { control: 'text' },
    ariaErrormessage: { control: 'text' },
    ariaFlowto: { control: 'text' },
    ariaHaspopup: { control: 'text' },
    ariaHidden: { control: 'text' },
    ariaInvalid: { control: 'text' },
    ariaKeyshortcuts: { control: 'text' },
    ariaLabel: { control: 'text' },
    ariaLabelledby: { control: 'text' },
    ariaLive: { control: 'text' },
    ariaOwns: { control: 'text' },
    ariaRelevant: { control: 'text' },
    ariaRoledescription: { control: 'text' },
    storyContent: { table: { disable: true } },
  },
  parameters: {
    docs: {
      format: 'html',
    },
  },
} as Meta<TextFieldArgs>;

export const GenericStory: Story<TextFieldArgs> = {
  name: 'Text Field',
  args: {
    placeholder: 'Enter Text',
  },
  render: createStory(storyTemplate),
};

export const TextFieldWithSlottedStartEnd = {
  name: 'With Slotted Start and End',
  args: {
    storyContent: html` <svg slot="start" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M10.35 3.15c.2.2.2.5 0 .7L6.21 8l4.14 4.15a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z"/></svg>
    <svg slot="end" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.65 3.15a.5.5 0 0 0 0 .7L9.79 8l-4.14 4.15a.5.5 0 0 0 .7.7l4.5-4.5a.5.5 0 0 0 0-.7l-4.5-4.5a.5.5 0 0 0-.7 0Z"/></svg>
  }`,
  },
  render: createStory(storyTemplate),
};
