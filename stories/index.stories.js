import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { View, Button, TextInput, Menu } from 'react-bucket';

storiesOf('Welcome', module).add('to Storybook', () => {
  return (
    <Welcome showApp={linkTo('Button')} />
  )
});

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('TextInput', module)
  .add('with text', () => <TextInput />)

storiesOf('Menu', module)
  .add('basic', () => (
    <View>
      <Menu></Menu>
    </View>
  ))