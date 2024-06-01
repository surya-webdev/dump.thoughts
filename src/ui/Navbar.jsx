import NavLinks from './NavLinks';
import NavLogo from './NavLogo';

function Navbar() {
  return (
    <div className="overflow-x-hidden">
      <NavLogo>
        <NavLinks />
      </NavLogo>
    </div>
  );
}

export default Navbar;
