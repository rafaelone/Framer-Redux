import { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RootState } from '../../store';
import { Container, ListItem, Next } from './styles';

import * as actions from '../../store/pizza/actions';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 0.5 },
  },
  exit: {
    x: '-100vh',
    transition: { ease: 'easeInOut' },
  },
};

const nextVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: { type: 'spring', stiffness: 120 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

export function Base(): ReactElement {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  const { base: basePizza } = useSelector(
    (state: RootState) => state.pizzaReducer,
  );

  const dispatch = useDispatch();

  function handleAddBase(base: string): void {
    dispatch(actions.AddBase(base));
  }

  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => (
          <ListItem
            active={basePizza === base}
            key={base}
            whileHover={{ scale: 1.3, originX: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <button type="button" onClick={() => handleAddBase(base)}>
              <span>{base}</span>
            </button>
          </ListItem>
        ))}
      </ul>
      {basePizza.length >= 0 && (
        <Next variants={nextVariants}>
          <Link to="/toppings">
            <motion.button
              type="button"
              variants={buttonVariants}
              whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        </Next>
      )}
    </Container>
  );
}
