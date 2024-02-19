import { useState } from 'preact/hooks';
import { DemoStackedList } from './thing/StackedList';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import './app.css';

import { DemoRadioGroup } from './thing/Radio125';
export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DemoStackedList />
    </>
  );
}
