//npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
//npm i @chakra-ui/icons
import { NavBar } from "../components/NavBar";
import { SetStateAction, useState } from "react";
import defaultTeam1 from "../assets/realMadridIcon.png"
import defaultTeam2 from "../assets/barcelonaIcon.png"
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import {EditIcon, DeleteIcon} from "@chakra-ui/icons";
import {
    Box,
    Flex,
    useDisclosure,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    useBreakpointValue,
    ChakraProvider,
  } from "@chakra-ui/react";
  import { useEffect} from "react";
  import ModalComp from "../components/ModalComp";

export function Bet() {
    const [busca, setBusca] = useState('');
    const [rightTeam,setRightTeam] = useState(defaultTeam1);
    const [leftTeam, setLeftTeam] = useState(defaultTeam2);
    const [valorAposta, setvalorAposta] = useState('');
    const [times, setTimes] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState([]);
    const [dataEdit, setDataEdit] = useState({});


    const hendleTeamUpdate = (event : any) => {
        console.log(event.target.id);
        if (event.target.id == "leftTeamSelect"){
            setLeftTeam(event.target.value);
        } else {
            setRightTeam(event.target.value);
        }
      };

      useEffect(() => {
        const db_costumer = localStorage.getItem("aposta_cliente")
          ? JSON.parse(localStorage.getItem("aposta_cliente")!)
          : [];
    
        setData(db_costumer);
      }, [setData]);   

    const handleAposta = () =>{
        alert("Aposta registrada!")
        
         
    }
    const handleRemove = (times: any) => {
        const newArray = data.filter((item: any) => item.times !== times);
    
        setData(newArray);
    
        localStorage.setItem("aposta_cliente", JSON.stringify(newArray));
      };


    return(
      <ChakraProvider>
        <div className="bg-black max-w-full flex flex-col items-center justify-center">
            <NavBar />
        </div>
    <div className="w-screen h-screen bg-gradient-to-bl from-green-900 via-gray-900 to-black flex flex-col items-center justify-center ">
    <div className="bg-slate-50 bg-opacity-5 w-full max-w-2xl flex flex-col justify-center rounded-2xl gap-3">
        <Flex
      h="70vh"
      align="center"
      justify="center"
      fontSize="20px"
      fontFamily="poppins"
      
    >
    
      <Box maxW={800} w="100%" h="100vh" py={10} px={2}>
        <Button  onClick={() => [setDataEdit({}), onOpen()]}>
          NOVA APOSTA
        </Button>

        <Box overflowY="auto" height="100%">
          <Table mt="6">
          <Thead>
              <Tr>
                <Th color={"whiteAlpha.900"} maxW = {100} fontSize="20px">
                  Valor
                </Th>
                <Th color={"whiteAlpha.900"} maxW = {100} fontSize="20px">
                  Times
                </Th>
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead> 
            <Tbody>
            {data.filter((item:any)=>item.valor.toLowerCase().includes(busca.toLowerCase()) || item.times.toLowerCase().includes(busca.toLowerCase())).map(({ valor, times }, index) => (
                <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                    <Td color={"whiteAlpha.900"} maxW={100}>{valor}</Td>
                    <Td color={"whiteAlpha.900"} maxW={100}>{times}</Td>
                  <Td p={0}>
                    <EditIcon
                      color={"whiteAlpha.900"}                    
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ valor, times, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td p={0}>
                    <DeleteIcon
                      color={"whiteAlpha.900"}
                      fontSize={20}
                      onClick={() => handleRemove(times)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {isOpen && (
        <ModalComp
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}</Flex><input
      type='text'
      placeholder="Buscar..."
      value={busca}
      onChange={(ev) => setBusca(ev.target.value)}
    ></input></div></div> 
      </ChakraProvider>
  );
};
       