import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import { useRef, useState } from "react";
import TextInput from "../inputs/TextInput";
import { Send } from "lucide-react";
import SuccessModel from "../SuccessModel";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef<HTMLSelectElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleInputChange = (key: string, value: string) => {
    setFormData(() => ({
      ...formData,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsSubmitting(false);
    setShowSuccess(true); // displays a success modal
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // auto hide success modal after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 text-gray-900 bg-white dark:bg-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* background elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 bg-blue-400 dark:bg-blue-500" />

        <div className="absolute bottom-40 right-1/4 w-80 h-80 rounded-full blur-3xl  opacity-5 bg-purple-400 dark:bg-purple-500" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* section header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="uppercase tracking-widest text-gray-600 dark:text-gray-500 mb-4"
          >
            Let's Connect
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-7xl font-light mb-6"
          >
            Get In
            <span className="text-blue-500 dark:text-blue-400 font-medium">
              {" "}
              Touch
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg max-w-2xl mx-auto font-light text-gray-600 dark:text-gray-400"
          >
            Ready to start your next project? Let's discuss how we can bring
            your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start lg:gap-20">
          {/* contact form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className=""
          >
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl border bg-gray-50/80 border-gray-200 dark:bg-gray-800/50 dark:border-gray-700 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-medium mb-8 ">Send me a message</h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <TextInput
                    value={formData.name}
                    handleInputChange={(value: string) =>
                      handleInputChange("name", value)
                    }
                    label="Your Name"
                  />

                  <TextInput
                    value={formData.email}
                    handleInputChange={(value: string) =>
                      handleInputChange("email", value)
                    }
                    label="Email Address"
                  />
                </div>

                <TextInput
                  value={formData.message}
                  handleInputChange={(value: string) =>
                    handleInputChange("message", value)
                  }
                  label="Your Message"
                  textArea
                />

                <motion.button
                  disabled={isSubmitting}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 1.2 }}
                  onClick={handleSubmit}
                  className="py-4 flex items-center justify-center space-x-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-t-transparent rounded-full border-white"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} /> <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* contact info & social links */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* contact information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-4">
                {CONTACT_INFO.map((info, index) => {
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 4 }}
                      className="p-2 flex items-center space-x-4 rounded-xl bg-gray-50/50 hover:bg-gray-100/50 dark:bg-gray-800/30 dark:hover:bg-gray-800/50 transition-all duration-300"
                    >
                      <div className="p-3 rounded-lg bg-white dark:bg-gray-700">
                        <info.icon
                          size={20}
                          className="text-blue-500 dark:text-blue-400"
                        />
                      </div>

                      <div>
                        <div className="text-gray-600 dark:text-gray-500">
                          {info.label}
                        </div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* social links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-medium mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-3 p-4 rounded-xl border bg-white/80 border-gray-200 hover:border-gray-300 dark:bg-gray-800/50 dark:border-gray-700 dark:hover:bg-gray-600 ${social.bgColor} ${social.color}`}
                  >
                    <social.icon size={20} />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* availability status */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-xl border bg-green-50 border-green-200 dark:bg-green-500/10 dark:border-green-500/20"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-500 font-medium">
                  Available for work
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                I'm currently seeking full-time opportunities as a software
                developer.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto p-8 rounded-2xl border dark:bg-gray-800/30 dark:border-gray-700 bg-gray-50/50 border-gray-200"
          >
            <h3 className="text-xl font-medium mb-4">Prefer a quick call?</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Sometimes, a conversation says more than a thousand messages. Feel
              free to schedule a call — I'd love to connect and discuss further.
            </p>
            <motion.button
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 1.08 }}
              className="px-6 py-3 rounded-full border font-medium transition-all border-gray-300 hover:text-blue-600 hover:border-blue-500 dark:border-gray-600  dark:hover:text-blue-400"
            >
              Schedule a Call
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <SuccessModel showSuccess={showSuccess} setShowSuccess={setShowSuccess} />
    </section>
  );
};

export default ContactSection;
