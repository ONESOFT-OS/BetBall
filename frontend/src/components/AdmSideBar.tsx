import '../styles/sideBar.css';
import { Link } from "react-router-dom";
import { ActivityLogIcon, BellIcon, CalendarIcon, DoubleArrowRightIcon, GearIcon, HomeIcon, PersonIcon, PlusCircledIcon, UploadIcon } from '@radix-ui/react-icons';
import { ArrowRightIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { CurrencyCircleDollar } from 'phosphor-react';
import '../styles/dialog.css';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';


export function AdmSideBar (){
    return (
        <nav className="sidebar close">
        <header>
            <div className="image-text">
                <span className="image">
                    <Link to={"/adm/settings"}>
                        <div className="mt-3 bg-[url('../assets/betball-icon.png')] bg-contain bg-no-repeat w-[40px] h-[40px]">
                        </div>
                    </Link>
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
                        <div className="link">
                            <Link to={"/adm/dashboard"}>
                                <HomeIcon className="icon"/>
                                <span className="text nav-text">Dashboard</span>
                            </Link>
                        </div>
                    </li>

                    <li className="nav-link">
                        <div className="link">
                            <Link to={"/adm/users"}>
                                <PersonIcon className="icon"/>
                                <span className="text nav-text">Adicionar</span>
                            </Link>
                        </div>
                    </li>

                    <li className="nav-link">
                        <div className="link">
                            <BellIcon className="icon"/>
                            <span className="text nav-text">Notificações</span>
                        </div>
                    </li>

                    <li className="nav-link">
                    <Dialog.Root>
                    <Dialog.Trigger>
                        <button className="link">
                        <CurrencyCircleDollar className="icon"/>
                        <span className="text nav-text">Lucro</span>
                        </button>
                    </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className="DialogOverlay" />
                            <Dialog.Content className="DialogContent">
                                <Dialog.Title className="DialogTitle">Taxa de Lucro</Dialog.Title>
                                <Dialog.Description className="DialogDescription">
                                    Altere sua taxa  de lucro por aposta ganha (%).
                                </Dialog.Description>
                                <fieldset className="Fieldset">
                                    <label className="Label" htmlFor="description">
                                        Descrição
                                    </label>
                                    <input className="Input" id="description" defaultValue="Lucro 2025" />
                                    <input className="Input" id="valor" defaultValue="80%" />
                                </fieldset> 
                                <div className="flex mt-[25px] justify-end">
                                    <Dialog.Close asChild>
                                        <button className="Button green">Salvar mudanças</button>
                                    </Dialog.Close>
                                </div>
                                <Dialog.Close asChild>
                                    <button className="IconButton" aria-label="Close">
                                        <Cross2Icon />
                                    </button>
                                </Dialog.Close>
                            </Dialog.Content>    
                        </Dialog.Portal>
                    </Dialog.Root>
                    </li>

                    <li className="nav-link">
                        <a className="link" href="../src/assets/u104056323_betballaB.20220905231006.sql.rar" download={"u104056323_betballaB.20220905231006"} id="downloadBtn">
                            <UploadIcon className="icon"/>
                            <span className="text nav-text">Backup</span>
                        </a>
                    </li>

                    <li className="nav-link">
                        <div className="link">
                            <Link to={"/adm/logs"}>
                                <ActivityLogIcon className="icon"/>
                                <span className="text nav-text">Logs</span>
                            </Link>
                        </div>
                    </li>

                    <li className="nav-link">
                        <div className="link">
                            <Link to={"/adm/settings"}>
                                <GearIcon className="icon"/>
                                <span className="text nav-text">Logs</span>
                            </Link>
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
