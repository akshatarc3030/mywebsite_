import React, { useState } from 'react';
import {
  Check,
  Copy,
  Mail,
  MapPin,
  Send,
  SendHorizontal,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onShowToast('Email address copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast('Message transmitted successfully! Thank you for reaching out.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 border-t border-pink-100/70">
      <div className="max-w-[1240px] mx-auto space-y-8">
        {/* Section Heading */}
        <div className="space-y-1.5 max-w-3xl">
          <div className="font-mono text-xs font-bold text-[#9d174d] tracking-widest uppercase flex items-center gap-2">
            <span>06 // GET IN TOUCH</span>
            <span className="h-px w-12 bg-pink-200"></span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1e1b1e] tracking-tight">
            Let's Build Something Intelligent
          </h2>
          <p className="text-[#5c4a56] text-sm sm:text-base leading-relaxed">
            I'm always interested in learning, collaborating on projects, and exploring new
            opportunities in AI, Data Science, and practical software engineering.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div
              id="contact-email-card"
              className="bg-white border border-pink-200/80 rounded-xl p-6 shadow-[0_2px_12px_-3px_rgba(219,39,119,0.04)] space-y-3"
            >
              <div className="font-mono text-[10px] font-bold text-[#8c7283] uppercase tracking-wider">
                PRIMARY EMAIL
              </div>
              <div className="font-mono text-sm sm:text-base font-bold text-[#b7005e] select-all break-all">
                {PERSONAL_INFO.email}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  id="btn-copy-email"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-md bg-[#fdf4f7] hover:bg-[#fce7f3] border border-pink-200 text-xs font-semibold text-[#9d174d] transition cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  id="btn-mailto-email"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-md bg-[#9d174d] hover:bg-[#83123e] text-white text-xs font-semibold transition cursor-pointer shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div
              id="contact-location-card"
              className="bg-white border border-pink-200/80 rounded-xl p-6 shadow-[0_2px_12px_-3px_rgba(219,39,119,0.04)] space-y-2 flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-[#fce7f3] border border-pink-200 flex items-center justify-center text-[#db2777] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="font-mono text-[10px] font-bold text-[#8c7283] uppercase tracking-wider">
                  CAMPUS &amp; RESIDENCE
                </div>
                <div className="font-display text-sm font-bold text-[#1e1b1e] mt-1">
                  {PERSONAL_INFO.location}
                </div>
                <div className="text-xs text-[#5c4a56] mt-0.5">
                  REVA University Campus, Yelahanka
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div
            id="contact-form-card"
            className="lg:col-span-7 bg-white border border-pink-200/80 rounded-xl p-6 sm:p-8 shadow-[0_2px_12px_-3px_rgba(219,39,119,0.04)]"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-[10px] font-bold text-[#8c7283] uppercase tracking-wider"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#fffafb] border border-pink-200/80 text-xs sm:text-sm text-[#1e1b1e] placeholder-[#8c7283] focus:outline-none focus:border-[#db2777] focus:ring-1 focus:ring-[#db2777] transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-[10px] font-bold text-[#8c7283] uppercase tracking-wider"
                  >
                    YOUR EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#fffafb] border border-pink-200/80 text-xs sm:text-sm text-[#1e1b1e] placeholder-[#8c7283] focus:outline-none focus:border-[#db2777] focus:ring-1 focus:ring-[#db2777] transition"
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-[10px] font-bold text-[#8c7283] uppercase tracking-wider"
                >
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Project collaboration / Academic query"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#fffafb] border border-pink-200/80 text-xs sm:text-sm text-[#1e1b1e] placeholder-[#8c7283] focus:outline-none focus:border-[#db2777] focus:ring-1 focus:ring-[#db2777] transition"
                />
              </div>

              {/* Row 3: Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[10px] font-bold text-[#8c7283] uppercase tracking-wider"
                >
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-md bg-[#fffafb] border border-pink-200/80 text-xs sm:text-sm text-[#1e1b1e] placeholder-[#8c7283] focus:outline-none focus:border-[#db2777] focus:ring-1 focus:ring-[#db2777] transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-[#9d174d] hover:bg-[#83123e] text-white text-xs sm:text-sm font-semibold transition cursor-pointer shadow-sm disabled:opacity-60"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
