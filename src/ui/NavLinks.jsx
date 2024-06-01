import Spinner from './Spinner';
import { HiOutlineHome, HiOutlineLogout, HiOutlineUser } from 'react-icons/hi';
import { useLogout } from '../service/useLogout';
import { NavLink } from 'react-router-dom';

function NavLinks() {
  const { isLogoutMutate, isLoading } = useLogout();
  return (
    <div>
      <ul className="flex gap-8  text-slate-400">
        <li>
          <NavLink to={'/'}>
            <HiOutlineHome />
          </NavLink>
        </li>
        <li>
          <NavLink to={'/account'}>
            <HiOutlineUser />
          </NavLink>
        </li>
        <li>
          {isLoading ? (
            <Spinner />
          ) : (
            <HiOutlineLogout
              className="cursor-pointer"
              onClick={() => isLogoutMutate()}
            />
          )}
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
