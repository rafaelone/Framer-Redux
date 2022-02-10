import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  margin: 100px auto 40px;
  text-align: center;
  max-width: 800px;

  p {
    margin: 20px auto;
  }

  div + div {
    margin-top: 20px;
  }
`;
