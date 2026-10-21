import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("Email envoyé avec succès !");
      form.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("Erreur lors de l'envoi de l'email.");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <motion.div
        className="field"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <p>
          Nom<span>*</span>
        </p>
        <input type="text" name="name" required />
      </motion.div>
      <motion.div
        className="field"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          Email<span>*</span>
        </p>
        <input type="email" name="email" required />
      </motion.div>
      <motion.div
        className="field"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <p>
          Sujet<span>*</span>
        </p>
        <input type="text" name="sujet" required />
      </motion.div>
      <motion.div
        className="field"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <p>
          Message<span>*</span>
        </p>
        <textarea name="message" required />
      </motion.div>
      <motion.div
        className="field"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.1 }}
      >
        <button type="submit">Envoyer</button>
      </motion.div>

      <p role="status">{status}</p>
    </form>
  );
}

export default Contact;
