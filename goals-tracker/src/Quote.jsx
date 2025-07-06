import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [key, setKey] = useState(0);

    useEffect(() => {
  fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random")
    .then((res) => res.json())
    .then(data => {
      setQuote(data[0].q + " — " + data[0].a);
      setKey(prev => prev + 1);
    })
    .catch(() => setQuote("Push through it — you're stronger than you think."));
}, []);


  return (
    <AnimatePresence mode="wait">
      <motion.blockquote
        key={key}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        “{quote}”
      </motion.blockquote>
    </AnimatePresence>
  );
};

export default Quote;
