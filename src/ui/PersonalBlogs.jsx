import { useEffect, useState } from 'react';
import { useCurrAuth } from '../service/useCurrAuth';
import { supabase } from '../service/supabase';
import UserBlog from './UserBlog';

function PersonalBlogs() {
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
    };

    fetchData();
  }, [id]);

  console.log(isData);
  if (isData.length === 0) return;
  return (
    <>
      {isData.map((el) => (
        <UserBlog data={el} key={el.id} />
      ))}
    </>
  );
}

export default PersonalBlogs;
