//npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
//npm i @chakra-ui/icons
import {useTeam2} from '../hooks/useTeam2'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
  } from "@chakra-ui/react";
  
  import { useState } from "react";
  
  const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }:any) => {
    const [valor, setValor] = useState(dataEdit.valor || "");
    const [times, setTimes] = useState(dataEdit.times || "");
    const {team} = useTeam2()


    const handleSave = () => {
      if (!valor || !times) return;
  
      if (timesAlreadyExists()) {
        return alert("Time já cadastrado em aposta!");
      }
  
      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { valor, times };
      }
  
      const newDataArray = !Object.keys(dataEdit).length
        ? [...(data ? data : []), { valor, times }]
        : [...(data ? data : [])];
  
      localStorage.setItem("aposta_cliente", JSON.stringify(newDataArray));
      setData(newDataArray);
      window.location.href = window.location.href;

      const lista = [JSON.parse(localStorage.getItem("aposta_cliente")!).map((c: any) => c.valor)]
          var soma=0
          const lista2:any=[]
          
          for (var i = 0; i < lista[0].length; i++){
            soma+=Number(lista[0][i])
            if (i<lista[0].length){
              localStorage.setItem("saida", JSON.stringify(soma))

            }
          }
      onClose();
    };

  
    const timesAlreadyExists = () => {
      if (dataEdit.times !== times && data?.length) {
        return data.find((item: { times: any; }) => item.times === times);
      }
  
      return false;
    };
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Realize sua aposta!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel>Valor</FormLabel>
                  <Input
                    type="text"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Time</FormLabel>
                  <select value={times} onChange={text => setTimes(text.target.value)}>
                  <option>Selecione o time</option>
                    
                  {team.map((team) => (<option>{team.club_name}</option>))}
                  
                  </select>
                </Box>
              </FormControl>
            </ModalBody>
  
            <ModalFooter justifyContent="start">
              <Button colorScheme="green" mr={3} onClick={handleSave}>
                SALVAR
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                CANCELAR
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalComp;