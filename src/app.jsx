import { useState } from 'preact/hooks';
import { DemoStackedList } from './thing/stacked-list';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import './app.css';
import { GridListDemo } from './thing/grid-list';
import { DemoRadioGroup } from './thing/Radio125';
export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GridListDemo />
    </>
  );
}
