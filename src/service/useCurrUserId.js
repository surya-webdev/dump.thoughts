import { useMutation, useQuery } from '@tanstack/react-query';
import { getDataById } from './apiThoughts';
import { useCurrAuth } from './useCurrAuth';

export function useCurrUserId() {
  // const { isCurrUser, isLoading: isCurrLoading } = useCurrAuth();
  // const { id } = isCurrUser;
  //
  const { data, isLoading } = useMutation({
    mutationKey: ['getUser'],
    mutationFn: ({ id }) => getDataById({ id }),
  });

  return { data, isLoading };
}
