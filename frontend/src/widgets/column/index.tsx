import { CollisionPriority } from '@dnd-kit/abstract';
import { useDroppable } from '@dnd-kit/react';

type Props = {
  children: React.ReactNode;
  id: string;
};
const Column = ({ children, id }: Props) => {
  const { isDropTarget, ref } = useDroppable({
    id,
    type: 'column',
    accept: 'item',
    collisionPriority: CollisionPriority.Low,
  });
  return (
    <div className="shadow-md flex flex-col gap-4 p-4 h-full" ref={ref}>
      {children}
    </div>
  );
};
export default Column;
