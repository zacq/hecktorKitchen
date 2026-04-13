import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Smile } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] bg-white rounded-3xl shadow-2xl border border-brand-brown/5 overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-brand-orange p-6 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Chat with Hector 🐾</h3>
                  <p className="text-sm opacity-80">We're online to help you!</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-orange bg-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=chat${i}`} alt="Support" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-medium">Our team typically replies in minutes</span>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto bg-brand-cream/30 space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-orange flex-shrink-0 flex items-center justify-center text-xs text-white font-bold">H</div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-brand-brown/5 text-sm leading-relaxed">
                  Hello! I'm Hector's assistant. How can I help you find the perfect meal for your companion today? 🐶
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-brand-brown/5">
              <div className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full pl-4 pr-12 py-3 bg-brand-cream rounded-2xl border border-brand-brown/5 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-orange hover:bg-brand-orange/10 rounded-xl transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-2 mt-3 text-brand-brown/40">
                <Smile className="w-4 h-4 cursor-pointer hover:text-brand-orange transition-colors" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Powered by NeuraFlow</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-colors relative ${
          isOpen ? 'bg-brand-brown text-white' : 'bg-brand-orange text-white'
        }`}
      >
        {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
        )}
      </motion.button>
    </div>
  );
}
