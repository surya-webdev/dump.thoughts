import { useQuery } from '@tanstack/react-query';
import { getThoughts } from './apiThoughts';

function useThoughts() {
  const { data, isLoading } = useQuery({
    queryFn: getThoughts,
    queryKey: ['thoughts'],
  });

  return { data, isLoading };
}

export default useThoughts;
