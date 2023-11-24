import Link from "next/link";
import NavLink from "./NavLink";

const NavBar = () => {
  const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#porjects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-[15px] text-white font-semibold">
          <h1>Home</h1>
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} text={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
