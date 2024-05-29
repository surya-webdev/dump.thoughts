import { Outlet } from 'react-router';
import Navbar from './Navbar';

function Applayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Applayout;
