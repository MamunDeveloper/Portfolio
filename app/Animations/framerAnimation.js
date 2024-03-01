const appearFromLeftAnimation = {
  initial: { x: -300, opacity: 0 },
  whileInView: { x: 1, opacity: 1 },
  transition: { duration: 1, delay: 0.5, type: "spring", damping: 20 },
  viewport: { once: true },
};

const appearFromBottomAnimation = {
  initial: { y: 200, opacity: 0 },
  whileInView: { y: 1, opacity: 1 },
  transition: { duration: 1, delay: 0.5, type: "spring", damping: 20 },
  viewport: { once: true },
};

const smallToBigAnimation = {
  initial: { scale: 0, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  transition: {
    duration: 1,
    delay: 0.5,
    type: "spring",
    damping: 20,
    stifness: 100,
  },
  viewport: { once: true },
};

export {
  appearFromLeftAnimation,
  smallToBigAnimation,
  appearFromBottomAnimation,
};
