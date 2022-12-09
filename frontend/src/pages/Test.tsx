import { InputDate } from "../components/InputDate";
import { RankingIten } from "../components/RankingIten";

// So fiz essa pagina para testar uns componentes so ignora
// - paulo

export function Test() {
    return (
    <div className="bg-gray-900">
        <RankingIten ranking="1" nickName="paulo" earnedValue="1000" wonBets="10" position="top"/>
        <RankingIten ranking="1" nickName="paulo" earnedValue="1000" wonBets="10"/>
        <RankingIten ranking="1" nickName="paulo" earnedValue="1000" wonBets="10"/>
        <RankingIten ranking="1" nickName="paulo" earnedValue="1000" wonBets="10" position="down"/>
    </div>
    )
}