import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from './apiThoughts';
import { useNavigate } from 'react-router';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: isLogoutMutate, isLoading } = useMutation({
    //
    mutationFn: () => logout(),
    onSuccess: () => {
      queryClient.removeQueries(['user']);
      navigate('login', { replace: true });
    },
  });

  return { isLogoutMutate, isLoading };
}
