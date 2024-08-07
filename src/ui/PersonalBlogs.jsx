import { useEffect, useState } from 'react';
import { useCurrAuth } from '../service/useCurrAuth';
import { supabase } from '../service/supabase';
import UserBlog from './UserBlog';
import { useQueryClient } from '@tanstack/react-query';

function PersonalBlogs() {
  const queryClient = useQueryClient();

  const { isCurrUser, isLoading: isCurrLoading } = useCurrAuth();

  const [isData, setIsData] = useState('');
  // const { data, isLoading: isUser } = useCurrUserId();
  const { id } = isCurrUser;

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('thoughts')
        .select('*')
        .eq('userId', id);

      if (error) {
        throw error;
      }

      setIsData(data);

      queryClient.invalidateQueries({ queryKey: ['user'] });
    };

    fetchData();
  }, [id, queryClient]);

  if (isData.length === 0) return;

  return (
    <div className="grid grid-cols-1 justify-between md:grid-cols-2 md:gap-10">
      {isData.map((el) => (
        <UserBlog data={el} key={el.id} />
      ))}
    </div>
  );
}

export default PersonalBlogs;
