import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    viewMode: 'docs',
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: 'centered',
    inlineStories: true,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
