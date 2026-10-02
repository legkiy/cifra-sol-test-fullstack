import { Column } from '~/widgets/column';
import type { Route } from './+types/home';
import { DragItem } from '~/entities/drag-item';
import { useState } from 'react';
import { DragDropProvider } from '@dnd-kit/react';
import { move } from '@dnd-kit/helpers';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  const [items, setItems] = useState({
    A: ['0', '1', '2', '3', '4', '5'],
    B: [],
  });
  return (
    <DragDropProvider
      onDragOver={(event) => {
        setItems((items) => move(items, event));
      }}
    >
      <div className="grid grid-cols-2 gap-4 h-full max-w-300 mx-auto">
        <Column id="A" canAddItem>
          {items.A.map((el, idx) => (
            <DragItem key={el} columnId="A" id={el} index={idx} />
          ))}
        </Column>
        <Column id="B">
          {items.B.map((el, idx) => (
            <DragItem key={el} columnId="B" id={el} index={idx} />
          ))}
        </Column>
      </div>
    </DragDropProvider>
  );
}
