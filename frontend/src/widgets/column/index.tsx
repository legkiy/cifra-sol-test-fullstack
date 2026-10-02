import { CollisionPriority } from '@dnd-kit/abstract';
import { useDroppable } from '@dnd-kit/react';
import { AddItem } from '~/feature/add-item';
import { Filter } from '~/feature/filter';

type Props = {
  children: React.ReactNode;
  id: string;
  canAddItem?: boolean;
};

export const Column = ({ children, id, canAddItem }: Props) => {
  const { isDropTarget, ref } = useDroppable({
    id,
    type: 'column',
    accept: 'item',
    collisionPriority: CollisionPriority.Low,
  });
  return (
    <div className="shadow-md flex flex-col gap-4 p-4 h-full" ref={ref}>
      <Filter />
      {canAddItem && <AddItem />}
      {children}
    </div>
  );
};
