import { motion } from 'framer-motion';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Container } from './styles';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: 'beforeChildren',
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export function Order(): ReactElement {
  const { base, toppings } = useSelector(
    (state: RootState) => state.pizzaReducer,
  );

  return (
    <Container variants={containerVariants} initial="hidden" animate="visible">
      <h2>Thank you for your order!</h2>
      <motion.p>Yoo ordered a {base} pizza with: </motion.p>
      <motion.div variants={childVariants}>
        {toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </Container>
  );
}
