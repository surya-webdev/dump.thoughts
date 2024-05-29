import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className=" flex justify-between p-5 text-xl text-slate-200 xl:text-2xl">
      <h1 className=" cursor-pointer text-2xl font-semibold">Dump Thoughts</h1>
      <div>
        <ul className="flex gap-8  text-slate-400">
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/account'}>Account</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
