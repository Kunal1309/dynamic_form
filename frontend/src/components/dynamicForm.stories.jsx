import React, { useState } from 'react';
import dynamicForm from './dynamicForm';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/DynamicForm',
  component: dynamicForm,
};

const Template = (args) => {
  const [titleValue, setTitleValue] = useState('');
  const [dropDownvalue, setDropDownValue] = useState('');
  const [enterTextHereValue, setEnterTextHereValue] = useState('');
  const [radioListValue, setRadioListValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [checkBoxValue, setCheckBoxValue] = useState({
    japan: false,
    germany: false,
    india: false,
  });

  return (
    <dynamicForm
      titleValue={titleValue}
      setTitleValue={setTitleValue}
      dropDownvalue={dropDownvalue}
      setDropDownValue={setDropDownValue}
      enterTextHereValue={enterTextHereValue}
      setEnterTextHereValue={setEnterTextHereValue}
      radioListValue={radioListValue}
      setRadioListValue={setRadioListValue}
      dateValue={dateValue}
      setDateValue={setDateValue}
      locationValue={locationValue}
      setLocationValue={setLocationValue}
      checkBoxValue={checkBoxValue}
      setCheckBoxValue={setCheckBoxValue}
      onFormSubmit={action('Form Submitted')}
      onDeleteForm={action('Form Deleted')}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
