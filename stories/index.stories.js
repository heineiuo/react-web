import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { View, Button, TextInput, Menu } from '../index.js';

storiesOf('Welcome', module)
  .add('to Storybook', () => {
    return (
      <View>
        Welcome
      </View>
    )
  });

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>
      Hello Button
  </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));



storiesOf('TextInput', module)
  .add('with text', () => (
    <TextInput />
  ))

storiesOf('Menu', module)
  .add('basic', () => (
    <View>
      <Menu></Menu>
    </View>
  ))