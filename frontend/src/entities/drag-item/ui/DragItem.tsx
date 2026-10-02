import { useSortable } from '@dnd-kit/react/sortable';

type Props = {
  id: string;
  index: number;
  columnId: string;
};
export const DragItem = ({ columnId, id, index }: Props) => {
  const { ref, isDragging } = useSortable({
    id,
    index,
    type: 'item',
    accept: 'item',
    group: columnId,
  });
  return (
    <div
      className="border rounded-full p-2 border-gray-200 bg-white"
      ref={ref}
      data-dragging={isDragging}
    >
      <p>ID {id}</p>
    </div>
  );
};
