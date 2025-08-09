import { type ChangeEvent, type FormEvent, useState } from "react";
import "./form_vanila.css";

type ContactFormType = {
  name: string;
  email: string;
  message: string;
  preference: string;
};

export const FormVanila = () => {
  const [formData, setFormData] = useState<ContactFormType>({
    name: "",
    email: "",
    message: "",
    preference: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Form</h2>

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        placeholder="Enter your message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <fieldset>
        <legend>How did you hear about us?</legend>

        <label>
          <input
            type="radio"
            name="preference"
            value="newsletters"
            checked={formData.preference === "newsletters"}
            onChange={handleChange}
            required
          />
          Search Engine (Yandex, Google, Bing)
        </label>

        <label>
          <input
            type="radio"
            name="preference"
            value="updates"
            checked={formData.preference === "updates"}
            onChange={handleChange}
            required
          />
          Social Media
        </label>

        <label>
          <input
            type="radio"
            name="preference"
            value="offers"
            checked={formData.preference === "offers"}
            onChange={handleChange}
            required
          />
          Friend or Colleague
        </label>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  );
};
