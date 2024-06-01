function NavLogo({ children }) {
  return (
    <nav className="  flex w-screen justify-between p-4 text-xl text-slate-200 sm:p-5 xl:text-2xl">
      <h1 className=" font-heading cursor-pointer bg-gradient-to-br from-purple-500/40 via-blue-300 to-blue-400 bg-clip-text text-xl font-semibold text-blue-300 text-transparent sm:text-2xl">
        Dump Thoughts
      </h1>
      {children}
    </nav>
  );
}

export default NavLogo;
