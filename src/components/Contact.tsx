import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Message envoyé avec succès !');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contactez-moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter !
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Informations de contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                    <a 
                      href="mailto:martialatems128@gmail.com"
                      className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      martialatems128@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">WhatsApp</h4>
                    <a 
                      href="https://wa.me/237678518089"
                      className="text-green-500 hover:text-green-600 transition-colors duration-200"
                    >
                      +237 678 518 089
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">Localisation</h4>
                    <p className="text-gray-600 dark:text-gray-300">Cameroun</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="mailto:martialatems128@gmail.com"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Mail size={20} />
                Email
              </a>
              <a
                href="https://wa.me/237678518089"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Envoyez-moi un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                  placeholder="Décrivez votre projet ou votre message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;