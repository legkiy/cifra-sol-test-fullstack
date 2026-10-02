import { IoAddCircle } from 'react-icons/io5';

export const AddItem = () => {
  return (
    <button className="flex items-center gap-2 mx-auto bg-green-200 px-4 py-2 rounded-full cursor-pointer">
      Добавить элемент
      <IoAddCircle className="size-5" />
    </button>
  );
};
