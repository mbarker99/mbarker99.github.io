import React from 'react';

const ContactForm = ({ form, onChange, onSubmit }) => (
  <>
    <div className="bg-gray-200 px-4 py-6 border-b border-gray-200">
      <h2 className="text-lg font-bold text-gray-900">Contact Me</h2>
      <p className="text-sm text-gray-600">Send me a message and I’ll get back to you soon.</p>
    </div>
    <form onSubmit={onSubmit} className="p-4 flex-1 flex flex-col space-y-4 bg-white">
      <input
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={onChange}
        required
        className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-sm transition"
      />
      <input
        name="email"
        type="email"
        placeholder="Your email"
        value={form.email}
        onChange={onChange}
        required
        className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-sm transition"
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Your message"
        value={form.message}
        onChange={onChange}
        required
        className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-sm transition resize-none"
      />
      <button
        type="submit"
        className="bg-red-600 text-white py-3 rounded-lg font-semibold text-sm hover:bg-red-700 transition"
      >
        Send Message
      </button>
    </form>
  </>
);

export default ContactForm;