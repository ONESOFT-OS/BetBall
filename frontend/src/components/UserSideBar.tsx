import '../styles/sideBar.css';
import { BellIcon, CalendarIcon, DoubleArrowRightIcon, GearIcon, HomeIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { ArrowRightIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";


export function UserSideBar (){
    return (
        <nav className="sidebar close">
        <header>
            <div className="image-text">
                <span className="image">
                    <div className="mt-3 bg-[url('../assets/betball-icon.png')] bg-contain bg-no-repeat w-[40px] h-[40px]">
                    </div>
                </span>

                <div className="text logo-text">
                    <span className="name">Rodrigo D.</span>
                    <span className="profession">Funcionário</span>
                </div>
            </div>

            <ChevronRightIcon className="toggle"/>

        </header>

        <div className="menu-bar">
            <div className="menu">

                <ul className="menu-links">
                    <li className="nav-link">
                        <div className="link ">
                            <HomeIcon className="icon"/>
                            <span className="text nav-text">Dashboard</span>
                        </div>
                    </li>

                <Link to={"/perfil/withdraw"}>
                    <li className="nav-link">
                            <div className="link">
                                    <GearIcon className="icon"/>
                                    <span className="text nav-text">Config</span>
                            </div>
                    </li>
                </Link>
                </ul>
            </div>

            <div className="bottom-content">
                <li className="">
                    <div className="link">
                        <span className="text nav-text">Sair</span>
                    </div>
                </li>
            </div>
        </div>

    </nav>
    )
}