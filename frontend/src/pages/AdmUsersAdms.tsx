import { ArrowDownIcon, Cross2Icon, ListBulletIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { AdmSideBar } from "../components/AdmSideBar";
import { Text } from "../components/Text";
import * as Dialog from '@radix-ui/react-dialog';
import '../styles/sideBar.css';


export function AdmUsersAdms(){
    return(
        <div className="main bg-[url('../assets/Gradient.svg')] bg-no-repeat bg-contain bg-dark-900 min-w-screen h-[100vw]">
            <div className="sideBar">
                <AdmSideBar/>
            </div>
            <div className="home pt-[100px] ">
                {/* Header */}
                <div className="header flex items-center justify-between">
                    <div className="col-1 text-white">
                        <h1 className="font-black text-[2.5rem]">Usuários</h1>
                        <p className=" text-[1.2rem] text-glass-800">Adicionar, editar ou excluir usuários.</p>
                    </div>

                    <div className="col-2 flex justify-center items-center gap-6">
                        <div className="search mt-2 p-5 justify-center bg-glass-500 bg-[url('../assets/search.svg')] bg-no-repeat bg-auto bg-center  w-[30px] h-[30px] rounded-[8px]">
                        </div>

                        <div className="button w-[150px] h-[35px]">
                            <Link to={"/adm/users/create"}>
                                <Button type='submit' className='min-w-fit max-w-xs text-center'>       
                                    + Add New 
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Navbar */}
                <div className="flex flex-col gap-4 pt-10 ">
                    <div className="flex flex-row justify-start gap-10 pb-3">
                        <Link to={'/adm/users/'}> 
                            <Text className="font-bold text-xl text-grey-500 hover:text-green-700">Funcionários</Text> 
                        </Link>
                        <Link to={'/adm/users/adms'}>  
                            <Text className="font-bold text-xl text-green-500 hover:text-green-700" >Administradores</Text>
                        </Link>
                        <Link to={'/adm/users/punter'}>   
                            <Text className="font-bold text-xl text-gray-500 ">Apostadores</Text>
                        </Link>
                    </div>                    
                </div>
                {/* Table */}
                <div className="table mt-8 w-[80vw] h-[90vh] bg-blacktransparent rounded-[10px]">
                    <div className="top-line w-[80vw] h-[8px] bg-green-700 rounded-t-[10px]"></div>
                    <div className="header p-5 px-10 text-white font-semibold flex justify-between">
                        <div>Id</div>
                        <div>Tipo</div>
                        <div>Usuário</div>
                        <div>Editar</div>
                    </div>
                    <div className="separator w-[80vw] h-[.3px] bg-glass-500"></div>
                    <div className="user-item">
                        <div className="content p-5 px-10 text-white font-normal flex justify-between items-center">
                            
                            <div className="id">
                                1
                            </div>
                            <div className="user-type mx-24">
                                Administrador
                            </div>
                            <div className="data flex gap-2">
                                <div className="photo">
                                    <img className="w-[50px] h-[50px] rounded-[100%]" src="../src/assets/users/user.png"/>
                                </div>
                                <div className="data-text flex flex-col">
                                    <div className="name">Carlos M.</div>
                                    <div className="email text-gray-300 font-extralight text-[12px]">rafael.tosta2023@gmail.com</div>
                                </div>
                            </div>
                            <div className="edit">
                                <Dialog.Root>
                                        <Dialog.Trigger>
                                            <button className="link">
                                            <ListBulletIcon/>
                                            </button>
                                        </Dialog.Trigger>
                                        <Dialog.Portal>
                                            <Dialog.Overlay className="DialogOverlay" />
                                            <Dialog.Content className="DialogContent">
                                                <Dialog.Title className="DialogTitle">Editar</Dialog.Title>
                                                <Dialog.Description className="DialogDescription">
                                                    Edite os dados de usuários
                                                </Dialog.Description>
                                                <fieldset className="Fieldset">
                                                    <label className="Label" htmlFor="description">
                                                        Nickname
                                                    </label>
                                                    <input className="Input" id="description" defaultValue="@tosta" />
                                                    <label className="Label" htmlFor="password">
                                                        Senha
                                                    </label>
                                                    <input className="Input" id="password" defaultValue="*******" />
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
                            </div>
                        </div>
                        <div className="separator w-[80vw] h-[.3px] bg-glass-500"></div>
                    </div>

                    <div className="user-item">
                        <div className="content p-5 px-10 text-white font-normal flex justify-between items-center">
                            
                            <div className="id">
                                2
                            </div>
                            <div className="user-type mx-24">
                                Administrador
                            </div>
                            <div className="data flex gap-2">
                                <div className="photo">
                                    <img className="w-[50px] h-[50px] rounded-[100%]" src="../src/assets/users/user.png"/>
                                </div>
                                <div className="data-text flex flex-col">
                                    <div className="name">Thiago F.</div>
                                    <div className="email text-gray-300 font-extralight text-[12px]">rodrigosampaio@gmail.com</div>
                                </div>
                            </div>
                            <div className="edit">
                                <Dialog.Root>
                                    <Dialog.Trigger>
                                        <button className="link">
                                        <ListBulletIcon/>
                                        </button>
                                    </Dialog.Trigger>
                                    <Dialog.Portal>
                                        <Dialog.Overlay className="DialogOverlay" />
                                        <Dialog.Content className="DialogContent">
                                            <Dialog.Title className="DialogTitle">Editar</Dialog.Title>
                                            <Dialog.Description className="DialogDescription">
                                                Edite os dados de usuários
                                            </Dialog.Description>
                                            <fieldset className="Fieldset">
                                                <label className="Label" htmlFor="description">
                                                    Nickname
                                                </label>
                                                <input className="Input" id="description" defaultValue="rodrigodamasceno" />
                                                <label className="Label" htmlFor="password">
                                                    Senha
                                                </label>
                                                <input className="Input" id="password" defaultValue="*******" />
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
                            </div>
                        </div>
                        <div className="separator w-[80vw] h-[.3px] bg-glass-500"></div>
                    </div>

                    <div className="user-item">
                        <div className="content p-5 px-10 text-white font-normal flex justify-between items-center">
                            
                            <div className="id">
                                3
                            </div>
                            <div className="user-type mx-24">
                                Administrador
                            </div>
                            <div className="data flex gap-2">
                                <div className="photo">
                                    <img className="w-[50px] h-[50px] rounded-[100%]" src="../src/assets/users/user.png"/>
                                </div>
                                <div className="data-text flex flex-col">
                                    <div className="name">Arial Carvalho</div>
                                    <div className="email text-gray-300 font-extralight text-[12px]">ariel.s.carvalho@gmail.com</div>
                                </div>
                            </div>
                            <div className="edit">
                                <Dialog.Root>
                                    <Dialog.Trigger>
                                        <button className="link">
                                        <ListBulletIcon/>
                                        </button>
                                    </Dialog.Trigger>
                                    <Dialog.Portal>
                                        <Dialog.Overlay className="DialogOverlay" />
                                        <Dialog.Content className="DialogContent">
                                            <Dialog.Title className="DialogTitle">Editar</Dialog.Title>
                                            <Dialog.Description className="DialogDescription">
                                                Edite os dados de usuários
                                            </Dialog.Description>
                                            <fieldset className="Fieldset">
                                                <label className="Label" htmlFor="description">
                                                    Nickname
                                                </label>
                                                <input className="Input" id="description" defaultValue="rodrigodamasceno" />
                                                <label className="Label" htmlFor="password">
                                                    Senha
                                                </label>
                                                <input className="Input" id="password" defaultValue="*******" />
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
                            </div>
                        </div>
                        <div className="separator w-[80vw] h-[.3px] bg-glass-500"></div>
                    </div>
                </div>

                {/* Carregar mais */}
                <div className="container flex justify-center items-center mt-[25px]">
                    <div className="see-more bg-white rounded-[100%] w-[40px] h-[40px] flex justify-center items-center">
                            <ArrowDownIcon className="w-[30px] h-[30px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}