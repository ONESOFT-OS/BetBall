import { InputDate } from "../components/InputDate";
import { Ranking } from "../components/Ranking";
import { RankingIten } from "../components/RankingIten";

// So fiz essa pagina para testar uns componentes so ignora
// - paulo

export function Test() {
    if ("13:00" > "12:59:00")
        console.log("nem fudendo");
    else
        console.log(";-;")
    return (
    <div className="bg-gray-900">
        <Ranking className="w-3/5"/>
    </div>
    )
}