import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Error while sending message.");
      });
  };

  return (
    <div className="flex-1">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4 bg-white/10 rounded-xl border border-white/20"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-white/70"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-white/70"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            required
            className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-white/70"
          />

          <button
            type="submit"
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium items-center justify-center hover:bg-gray-200"
          >
            Send Message
          </button>
        </form>
     </div>   
  );
};

export default ContactForm;
