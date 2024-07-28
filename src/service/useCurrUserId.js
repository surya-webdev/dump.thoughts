import { useMutation, useQuery } from '@tanstack/react-query';
import { getDataById } from './apiThoughts';

export function useCurrUserId() {
  const { data, isLoading } = useMutation({
    mutationKey: ['getUser'],
    mutationFn: ({ id }) => getDataById({ id }),
  });

  return { data, isLoading };
}
