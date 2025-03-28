import React from 'react';
import ReactDOM from 'react-dom/client';

export default function App() {

  /**
   * Challenge: get the password from the form too and log
   * it to the console to be sure it came in correctly.
   */

  function signUp(formData) {
    const data = Object.fromEntries(formData)
    console.log(data);
    const dietartrestrictions = formData.getAll('dietary');
    console.log(dietartrestrictions);
    const allData = {
      ...data,
      dietary: dietartrestrictions
    }
    console.log(allData);

  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" defaultValue="test@gmail.com" />
        <br />

        <label htmlFor="password" defaultValue="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" rows="6" defaultValue="some description text ..."></textarea>
        <br />

        <fieldset>
          <legend>Emplyment status</legend>
          <label htmlFor="unemployed">
            <input type="radio" id="unemployed" name="employmentStatus" value="unemployed" />Unemployed
          </label>
          <label htmlFor="parttime">
            <input type="radio" id="parttime" name="employmentStatus" value="part-time" />Part-time
          </label>
          <label htmlFor="fulltime">
            <input type="radio" id="fulltime" name="employmentStatus" value="full-time" defaultChecked={ true } />Full-time
          </label>
        </fieldset>
        <br />

        <fieldset>
          <legend>Dietary restriction</legend>
          <label htmlFor="meat">
            <input type="checkbox" id="meat" name="dietary" value="Meat" defaultChecked={ true } />Meat
          </label>
          <label htmlFor="vegan">
            <input type="checkbox" id="vegan" name="dietary" value="vegan" defaultChecked={ true } />Vegan
          </label>
          <label htmlFor="gluton">
            <input type="checkbox" id="gluton" name="dietary" value="gluton" defaultChecked={ true } />Gluton-free
          </label>
        </fieldset>

        <button>Submit</button>

      </form>
    </section>
  )
}
