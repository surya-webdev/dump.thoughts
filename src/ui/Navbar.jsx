import { HiOutlineHome, HiOutlineLogout, HiOutlineUser } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { useLogout } from '../service/useLogout';
import Spinner from './Spinner';

function Navbar() {
  const { isLogoutMutate, isLoading } = useLogout();
  return (
    <nav className=" flex justify-between p-5 text-xl text-slate-200 xl:text-2xl">
      <h1 className=" cursor-pointer text-2xl font-semibold">Dump Thoughts</h1>
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
            {/* <NavLink to={'/account'}> */}
            {isLoading ? (
              <Spinner />
            ) : (
              <HiOutlineLogout
                className="cursor-pointer"
                onClick={() => isLogoutMutate()}
              />
            )}
            {/* </NavLink> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
