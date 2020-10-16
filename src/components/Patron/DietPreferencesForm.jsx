import React from 'react'
import { Form, Message, Checkbox } from 'semantic-ui-react'
import "./DietPreferences.css"

const DietPreferences = () => {

  const handleSubmit = () => {
    alert('Submitting dietary preferences')
  }

  return (
    <>
      <Message>
        <Message.Header>Dietary Preferences</Message.Header>
        <p>Please specify any dietary preferences you may have</p>
      </Message>
      <Form >
        <Form.Field className="form-field-checkbox">
          <label>Nut Free</label>
          <Checkbox toggle />
        </Form.Field>
        <Form.Field className="form-field-checkbox">
          <label>Gluten Free</label>
          <Checkbox toggle />
        </Form.Field>
        <Form.Field className="form-field-checkbox">
          <label>Vegetarian</label>
          <Checkbox toggle />
        </Form.Field>
        <Form.Button primary fluid onClick={handleSubmit} type="submit">Submit</Form.Button>
      </Form>
    </>
  )
}

export default DietPreferences;
