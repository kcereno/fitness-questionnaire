import SunIcon from './icons/SunIcon';

function Nav() {
  return (
    <nav className="h-16 flex max-w-4xl">
      <div className="mx-6 flex w-full justify-end items-center">
        <SunIcon />
      </div>
    </nav>
  );
}

export default Nav;
