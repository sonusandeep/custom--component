import React, { Component } from 'react';
import {storiesOf,setAddon } from '@storybook/react';

import CustomButton from '../../src/index';

 storiesOf("Custom Button", module)
 .addWithJSX('simple', () => <CustomButton/>);