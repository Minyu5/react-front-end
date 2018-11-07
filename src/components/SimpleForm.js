import React, { Component } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Input, Button, Message } from 'semantic-ui-react';

class SimpleForm extends Component {

  tagInput({ input, meta: { touched, error }, ...custom }) {
    const hasError = touched && error !== undefined;
    return (
      <div>
        {hasError &&
          <Message
            error
            header='Error'
            content={error} />
        }
        <Input 
          error={hasError}
          fluid 
          placeholder="Enter Tag Here..."
          {...input}
          {...custom} />
      </div>
    );
  }

  submit({ tag }, dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({ 
        type: 'FETCH_PROJECT',
        tag,
        resolve,
        reject 
      });
    }).catch((error) => {
      throw new SubmissionError(error);
    });
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit.bind(this))}>
        <Field name="tag" component={this.tagInput} /> 
        <br/> 
        <Button fluid type="submit">Submit</Button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {}
  if (!values.tag || values.tag.trim() === '') {
    errors.tag = 'Tag required'
  } 
  return errors
}


export default reduxForm({
  form: 'simple',
  validate
})(SimpleForm)
