import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  text-align: center;
  max-width: 800px;

  h2 {
    font-size: 2em;
    margin-bottom: 30px;
  }

  button {
    color: var(--white);
    padding: 15px 30px;
    font-size: 1.6em;
    border: 3px solid white;
    margin: 30px 20px;
  }
`;
