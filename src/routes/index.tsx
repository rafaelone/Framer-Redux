import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Base } from '../components/Base';
import { Denis } from '../components/Denis';
import { Order } from '../components/Order';
import { TodoList } from '../components/TodoList';
import { Toppings } from '../components/Toppings';
import { Home } from '../pages/Home';

export function RoutesApp(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/base" element={<Base />} />
        <Route path="/toppings" element={<Toppings />} />
        <Route path="/order" element={<Order />} />
        <Route path="/denis" element={<Denis />} />
        <Route path="/todoList" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}
