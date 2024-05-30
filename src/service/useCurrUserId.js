import { useMutation, useQuery } from '@tanstack/react-query';
import { getDataById } from './apiThoughts';
import { useCurrAuth } from './useCurrAuth';

export function useCurrUserId() {
  //
  const { data, isLoading } = useMutation({
    mutationFn: ({ id }) => getDataById({ id }),
  });

  return { data, isLoading };
}
