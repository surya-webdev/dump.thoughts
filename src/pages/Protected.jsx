import { useNavigate } from 'react-router';
import { useCurrAuth } from '../service/useCurrAuth';
import Spinner from '../ui/Spinner';

function Protected({ children }) {
  const navigate = useNavigate();
  const { isCurrUser, isLoading, isCheckAuth } = useCurrAuth();
  console.log(isCurrUser);
  if (isLoading)
    return (
      <div className="flex h-svh w-screen items-center justify-center">
        <Spinner />
      </div>
    );
  if (isCheckAuth) {
    return <>{children}</>;
  } else {
    navigate('/login');
  }
}

export default Protected;
