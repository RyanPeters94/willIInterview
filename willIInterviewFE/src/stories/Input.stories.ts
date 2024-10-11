import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import Input from './Input.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Input',
  component: Input,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    type: {control: 'select', options: ['email', 'password']}
  },
  args: {
   
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
   type: 'email',
   placeholder: 'Please enter your email'
  },
};


