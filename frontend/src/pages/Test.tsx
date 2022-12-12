import { InputDate } from "../components/InputDate";
import { Ranking } from "../components/Ranking";
import { RankingIten } from "../components/RankingIten";

// So fiz essa pagina para testar uns componentes so ignora
// - paulo

export function Test() {
    return (
    <div className="bg-gray-900">
        <Ranking type = "value" className="w-3/5"/>
        <Ranking type = "bet" className="w-3/5"/>
    </div>
    )
}