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

export function Toppings(): ReactElement {
  const toppings = [
    'mushrooms',
    'peppers',
    'onions',
    'olives',
    'extra cheese',
    'tomatoes',
  ];

  const { toppings: toppingsPizza } = useSelector(
    (state: RootState) => state.pizzaReducer,
  );

  const dispatch = useDispatch();

  function handleAddToppings(topping: string) {
    dispatch(actions.AddToppings(topping));
  }

  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => (
          <ListItem
            key={topping}
            active={toppingsPizza.includes(topping)}
            whileHover={{ scale: 1.1, originX: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <button type="button" onClick={() => handleAddToppings(topping)}>
              <span>{topping}</span>
            </button>
          </ListItem>
        ))}
      </ul>
      <Next>
        <Link to="/order">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            type="button"
          >
            Order
          </motion.button>
        </Link>
      </Next>
    </Container>
  );
}
