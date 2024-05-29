import { useMutation } from '@tanstack/react-query';
import { uploadDump } from './apiThoughts';
import toast from 'react-hot-toast';

export function useUploadDump() {
  const { mutate: isDumping, isLoading } = useMutation({
    mutationFn: ({ isDumping, sub }) => uploadDump({ isDumping, sub }),
    onSuccess: () => {
      toast.success('Dump uploaded');
    },
    onError: () => {
      toast.error("dump couldn't uploaded");
    },
  });

  return { isDumping, isLoading };
}
