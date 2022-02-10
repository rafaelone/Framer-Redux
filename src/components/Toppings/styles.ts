import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

type ListItemProps = {
  active?: boolean;
};

export const Container = styled(motion.div)`
  max-width: 870px;
  margin: 100px auto 40px;

  ul {
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, 200px);
  }
`;

export const ListItem = styled(motion.li)<ListItemProps>`
  ${({ active }) =>
    active &&
    css`
      button {
        border: 2px solid var(--white);
        span {
          font-weight: bold;
        }
      }
    `}
`;

export const Next = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
