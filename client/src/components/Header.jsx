import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className="container-header border-b-2 p-4">
      <Link
        to="/"
        className="header__logo self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="header__logo--span px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Jairo Colón
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Buscar..."
          rightIcon={AiOutlineSearch}
          className="header__search hidden lg:inline"
        />
      </form>
      <Button
        className="header__search--button w-12 h-10 lg:hidden"
        color="gray"
        pill
      >
        <AiOutlineSearch />
      </Button>
      <div className="container-buttons__moon-sing-in flex gap-2 md:order-2">
        <Button
          className="moon--button w-12 h-10 hidden sm:inline"
          color="gray"
          pill
        >
          <FaMoon />
        </Button>
        <Link to="/sing-in">
          <Button
            className="sing-in--button"
            gradientDuoTone="purpleToBlue"
            pill
          >
            Iniciar sesión
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Inicio</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/sobre-mi"} as={"div"}>
          <Link to="/sobre-mi">Sobre mí</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/proyectos"} as={"div"}>
          <Link to="/proyectos">Proyectos</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
