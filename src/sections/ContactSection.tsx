"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { useState } from "react";
import toast from "react-hot-toast";
import { LuMail, LuMapPin, LuPhone, LuSend } from "react-icons/lu";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: LuMail,
    label: "Email",
    value: "madhusayi555@gmail.com",
    href: "mailto:madhusayi555@gmail.com",
  },
  {
    icon: LuPhone,
    label: "Phone",
    value: "+91 8247842565",
    href: "tel:+918247842565",
  },
  {
    icon: LuMapPin,
    label: "Location",
    value: "India",
    href: "#",
  },
];

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;

    const formData = new FormData(form);
    formData.append("access_key", "60c9ed7d-f916-4429-a97f-c22ff0c1e9c4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form Submitted successfully");
        form.reset();
      } else {
        toast.error("Error submitting form");
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/3 right-1/4 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10"
      />
      <div className="w-[90%] max-w-6xl mx-auto relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Let's build"
            highlight="something great"
            badge="Contact"
            description="Have a project in mind I'd love to hear about it. Let's connect."
          />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* left form */}
          <motion.form
            initial={{ opacity: 0, x: -80 }}
            whileHover={{ y: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={onSubmit}
            className="p-6 rounded-2xl bg-surface border border-border space-y-5"
          >
            <h3 className="text-lg font-semibold text-text">Let's Talk 👋</h3>
            {/* name */}
            <div>
              <label className="text-sm text-gray-400 block mb-1">Name</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 block mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 block mb-1">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                required
                placeholder="What would you like to discuss?"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 block mb-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full py-3 rounded-full bg-primary text-gray-200 font-medium hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(32,178,166,0.35)] active:scale-95 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Sending message...
                </>
              ) : (
                <>
                  Send Message
                  <LuSend className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
          {/* right form */}
          <motion.div
            className="p-2"
            initial={{ opacity: 0, x: 80 }}
            whileHover={{ y: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  whileHover={{ x: 8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={item.href}
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-surface/60 backdrop-blur hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
            {/* Available Crad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 rounded-2xl border border-primary/20 bg-surface p-6"
            >
              <span className="flex items-center gap-2 text-primary font-medium">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse " />
                Available for work
              </span>

              <p className="text-gray-400 mt-3 text-sm leading-7">
                I'm currently open to internships, freelance opportunities, and
                full-time roles in Full Stack Development, AI/ML, and Data
                Analytics.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
