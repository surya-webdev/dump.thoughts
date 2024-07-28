import { useMutation } from '@tanstack/react-query';
import { loginUser } from './apiThoughts';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export function useLogin() {
  const navigate = useNavigate();

  // loginUser

  const { mutate: isLoginMutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: () => {
      toast.success('your account logged in sucesfully ', navigate('/'));
    },
    onError: () => {
      toast.error('please check your email and password');
    },
  });

  return {
    isLoginMutate,
    isLoading,
  };
}
