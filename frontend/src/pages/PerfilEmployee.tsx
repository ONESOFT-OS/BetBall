import {Link} from "react-router-dom";
import {Heading} from "../components/Heading";
import {NavBar} from "../components/NavBar";
import {Text} from "../components/Text";
import {useState, useMemo, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/api";

const PerfilEmployee: React.FC = () => {
    const [gamesRows, setGamesRows] = useState([]);
    const [employeeRows, setEmployeeRows] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);

    const search = useMemo(() =>  {
        return searchParams.get('search') || "";
    }, [searchParams]);

    useEffect(async () => {
        setLoading(true);

        try {
            await api.get('/url_dos_jogos')
                .then(response => {
                    setLoading(false)

                    if (response instanceof Error) {
                        alert(response.message)
                    } else {
                        setGamesRows(response.data);
                    }
                });
        } catch (e) {
            console.error(e);
        }

    }, [searchParams]);


    return (
        <div
            className="bg-[url('../assets/Gradient.svg')] bg-black min-w-screen min-h-screen  max-h-full max-w-full flex flex-col items-center justify-center ">
            <NavBar/>

            <div
                className="bg-gray-900 w-[1000px] h-[600px] min-h-max min-w-max flex flex-col rounded-2xl bg-opacity-70  mt-10 mb-10">
                <header className="flex flex-row justify-between pt-12 px-10">
                    <div className="flex flex-row justify-start items-baseline">
                        <Heading size="xlg">Perfil - Funcionário</Heading>
                    </div>
                </header>

                <div className="flex flex-row pt-2 px-12 space-x-8">
                    <Text size="lg" className="font-semibold hover:text-green-500"><Link to={'/admSettings'}>Configurar
                        Perfil</Link></Text>
                    <Text size="lg" className="font-semibold hover:text-green-500"><Link to={'/newgame'}>Cadastrar
                        Jogos</Link></Text>
                    <Text size="lg" className="font-semibold hover:text-green-500"><Link to={'/user/create'}>Cadastrar
                        Usuários</Link></Text>
                    <Text size="lg" className="font-semibold hover:text-green-500"><Link to={'/games'}>Visualizar
                        Jogos</Link></Text>
                </div>
            </div>
        </div>
    )
}


export {PerfilEmployee}