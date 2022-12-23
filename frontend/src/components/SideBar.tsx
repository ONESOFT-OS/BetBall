import '../styles/sideBar.css';
import { BellIcon, CalendarIcon, DoubleArrowRightIcon, HomeIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { ArrowRightIcon, ChevronRightIcon } from '@chakra-ui/icons';

export function SideBar (){
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

                    <li className="nav-link">
                        <div className="link">
                            <PlusCircledIcon className="icon"/>
                            <span className="text nav-text">Adicionar</span>
                        </div>
                    </li>

                    <li className="nav-link">
                        <div className="link">
                            <BellIcon className="icon"/>
                            <span className="text nav-text">Notificações</span>
                        </div>
                    </li>

                    <li className="nav-link">
                        <div className="link">
                            <CalendarIcon className="icon"/>
                            <span className="text nav-text">Agendados</span>
                        </div>
                    </li>
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