import React from 'react';

const ContactForm = ({ form, onChange, onSubmit }) => (
  <>
    <div className="bg-blue-50 px-4 py-6 border-b border-gray-200">
      <h2 className="text-lg font-bold text-gray-900">Contact Me</h2>
      <p className="text-sm text-gray-600">Send me a message</p>
    </div>
    <form onSubmit={onSubmit} className="p-4 flex-1 flex flex-col space-y-3">
      <input
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={onChange}
        required
        className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
      />
      <input
        name="email"
        type="email"
        placeholder="Your email"
        value={form.email}
        onChange={onChange}
        required
        className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Your message"
        value={form.message}
        onChange={onChange}
        required
        className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded-lg font-medium text-sm hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  </>
);

export default ContactForm;
