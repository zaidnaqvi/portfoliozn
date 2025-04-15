import React, { useState } from "react";
import styled from "styled-components";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";
import { send } from "@emailjs/browser";

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f4f4f4;
  border-radius: 8px;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Message = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
`;

const SuccessMessage = styled(Message)`
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
`;

const ErrorMessage = styled(Message)`
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
`;

function ContactSection() {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null);

    // Replace with your EmailJS service ID, template ID, and public key
    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    try {
      const response = await send(serviceId, templateId, formData, publicKey);
      console.log("SUCCESS!", response.status, response.text);
      setSubmissionResult({
        success: true,
        message: "Message sent successfully!",
      });
      setFormData({ from_name: "", reply_to: "", message: "" }); // Clear the form
    } catch (error) {
      console.error("FAILED...", error);
      setSubmissionResult({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" bgColor="#f0f0f0">
      <Title>Contact Me</Title>
      <ContactForm onSubmit={handleSubmit}>
        <label htmlFor="from_name">Name:</label>
        <Input
          type="text"
          id="from_name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="reply_to">Email:</label>
        <Input
          type="email"
          id="reply_to"
          name="reply_to"
          value={formData.reply_to}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {submissionResult && submissionResult.success && (
          <SuccessMessage>{submissionResult.message}</SuccessMessage>
        )}

        {submissionResult && !submissionResult.success && (
          <ErrorMessage>{submissionResult.message}</ErrorMessage>
        )}
      </ContactForm>
    </SectionWrapper>
  );
}

export default ContactSection;
