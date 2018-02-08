import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Form = props => {
    //date formatter
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = mm + '/' + dd + '/' + yyyy;

    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="date">Date</label>:
                {today}
            </div>
            <div>
                <label>
                    <Field name="type" component="input" type="radio" value="business" />
                    {' '}
                    Business
          </label>
                <label>
                    <Field name="type" component="input" type="radio" value="individual" />
                    {' '}
                    Individual
          </label>
            </div>
            <div>
                <label htmlFor="Name">Name</label>
                <Field name="Name" component="input" type="text" />
            </div>
            <div>
                <label>
                    <Field name="sent" component="input" type="radio" value="email" />
                    {' '}
                    Email
          </label>
                <label>
                    <Field name="sent" component="input" type="radio" value="address" />
                    {' '}
                    Address
          </label>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <Field name="description" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="amount">Amount</label>
                <Field name="amount" component="input" type="number" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

Form = reduxForm({
    // a unique name for the form
    form: 'contact'
})(Form)

export default Form