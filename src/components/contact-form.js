import React from 'react';
import { navigate } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

function ContactForm() {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <div className="contact-form w-full mx-auto my-6 max-w-lg p-3">
      <h1 className="text-2xl mb-3">Contact Me</h1>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Your name:
            <br />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Your email:
            <br />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="email" onChange={handleChange} />
          </label>
        </p>
        <p className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message:
            <br />
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="message" onChange={handleChange} />
          </label>
        </p>
        <p>
          <button className="js-event-track bg-blue-900 border-2 border-white hover:bg-blue-500 text-white font-semibold py-3 px-5 rounded shadow-md hover:shadow-none inline-block no-underline text-xl" type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}

export default ContactForm;
