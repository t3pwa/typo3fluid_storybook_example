import { within, userEvent } from '@storybook/testing-library';
import { FluidTemplate } from "storybook-typo3fluid";

export default {
  title: 'Fluid/Page',
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => FluidTemplate({
  extension: 'typo3fluid_storybook_example',
  partial: 'Examples/Page',
  args
});

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {
//     name: 'Peter Parker'
//   }
// };

// More on interaction testing: https://storybook.js.org/docs/html/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
