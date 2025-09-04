import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Sparkles, X } from "lucide-react";

import type { Dispatch, SetStateAction } from "react";

interface Props {
  showSuccess: boolean;
  setShowSuccess: Dispatch<SetStateAction<boolean>>;
}

const SuccessModel = ({ showSuccess, setShowSuccess }: Props) => {
  return (
    <AnimatePresence>
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-xs"
          onClick={() => setShowSuccess(false)}
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.8 }}
            className="relative p-8 rounded-2xl border max-w-sm w-full text-center bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 p-1 rounded-lg transition-colors hover:bg-gray-100 dark:bg-gray-700"
            >
              <X size={18} />
            </button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
              }}
              className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6"
            >
              <CheckCircle size={32} className="text-white" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-medium mb-2"
            >
              Message Sent!
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 dark:text-gray-400 mb-6"
            >
              Thank you for reaching out! I'll get back to you within 24 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center"
            >
              <Sparkles
                size={24}
                className="text-yellow-500 dark:text-yellow-500"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModel;
