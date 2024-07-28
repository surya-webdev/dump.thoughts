import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteThoughtById } from './apiThoughts';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

function useDeleteById() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  //
  const { mutate, isLoading } = useMutation({
    mutationFn: (id) => deleteThoughtById(id),
    mutationKey: ['updateThoughts'],

    onSuccess: () => {
      toast.success('Deleted !', navigate('/account'));
      queryClient.invalidateQueries({ queryKey: ['updateThoughts'] });
    },
  });

  return { mutate, isLoading };
}

export default useDeleteById;
