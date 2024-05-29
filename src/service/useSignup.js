import { useMutation } from '@tanstack/react-query';
import { newUser } from './apiThoughts';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate: isSignupMutate, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) =>
      newUser({ name, email, password }),
    onSuccess: () => {
      toast.success(
        'your account created sucesfully please check your inbox confirm your email',
      );
    },
  });
  return {
    isSignupMutate,
    isLoading,
  };
}
