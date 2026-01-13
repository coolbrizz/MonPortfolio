import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Bonjour ! Comment puis-je vous aider ?" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Référence pour scroller automatiquement vers le bas
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const faqSuggestions = [
    "Quel est le prix d'un site vitrine ?",
    "Combien de temps pour créer un site ?",
    "Quelles technologies utilisez-vous ?",
    "Proposez-vous de la maintenance ?",
  ];

  // Scroll automatique à chaque nouveau message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fonction modifiée pour accepter un texte optionnel (textOverride)
  const sendMessage = async (textOverride: string | null = null) => {
    const textToSend = textOverride || input;

    if (!textToSend.trim()) return;

    // 1. UI Updates
    const userMessage = { role: "user", content: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // 2. Préparation de l'historique
      const history = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      // 3. Appel API
      const response = await axios.post("http://localhost:5000/api/chat", {
        message: textToSend,
        history: history,
      });

      const botMessage = { role: "assistant", content: response.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Erreur:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Désolé, une erreur est survenue." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Bouton Flottant d'ouverture */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-customBlue text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 active:scale-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
      </button>

      {open && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Box du Chatbot */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="pointer-events-auto bg-white w-full sm:w-[400px] sm:mr-6 sm:mb-20 h-[600px] max-h-[80vh] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
            >
              {/* Header */}
              <div className="bg-customBlue p-4 text-white flex justify-between items-center shadow-md z-10">
                <div>
                  <h3 className="font-bold text-lg">Assistant Web</h3>
                  <p className="text-xs text-blue-100">En ligne</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 hover:bg-blue-500 rounded-full transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Zone des messages (MODIFIÉE ICI POUR LA SCROLLBAR) */}
              <div
                className="flex-1 p-4 space-y-4 bg-gray-50 overflow-y-auto 
                [&::-webkit-scrollbar]:w-2 
                [&::-webkit-scrollbar-track]:bg-transparent 
                [&::-webkit-scrollbar-thumb]:bg-gray-300 
                [&::-webkit-scrollbar-thumb]:rounded-full 
                hover:[&::-webkit-scrollbar-thumb]:bg-gray-400"
              >
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm text-sm ${
                        msg.role === "user"
                          ? "bg-customBlue text-white rounded-br-sm"
                          : "bg-white text-gray-800 border border-gray-100 rounded-bl-sm"
                      }`}
                    >
                      <p className="leading-relaxed">{msg.content}</p>

                      {/* Suggestions FAQ intégrées dans le premier message */}
                      {msg.content ===
                        "Bonjour ! Comment puis-je vous aider ?" && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <p className="text-xs text-gray-400 mb-2">
                            Suggestions :
                          </p>
                          <div className="flex flex-col space-y-2">
                            {faqSuggestions.map((question, index) => (
                              <button
                                key={index}
                                onClick={() => sendMessage(question)}
                                disabled={isLoading}
                                className="text-left text-customBlue hover:text-blue-800 hover:bg-blue-50 p-1 rounded transition-colors text-xs font-medium"
                              >
                                ➡️ {question}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Indicateur de chargement */}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-100 text-gray-500 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                      <div className="flex space-x-1 h-5 items-center">
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                {/* Div invisible pour le scroll auto */}
                <div ref={messagesEndRef} />
              </div>

              {/* Zone de saisie */}
              <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex gap-2 items-center">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Tapez votre message..."
                    className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                  <button
                    onClick={() => sendMessage()}
                    disabled={isLoading || !input.trim()}
                    className="p-2 bg-customBlue text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-customBlue transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default App;
