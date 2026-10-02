import { IoSearch } from 'react-icons/io5';
import Input from '~/shared/ui/input';

export const Filter = () => {
  return (
    <div>
      <Input
        endIcon={<IoSearch className="size-5" />}
        placeholder="Filter by ID"
      />
    </div>
  );
};
