export function StaticCardDashboard (){
    return (
        <div className="card p-7 bg-blacktransparent rounded-[12px] min-w-[550px] h-[210px]">
            {/* Primeira linha */}
            <div className="row-1 mt-[-5px] flex items-center justify-between">
                {/* Coluna 1 */}
                <div className="col-1 flex-col">
                    <div className="text">
                        <p className="text-glass-800">
                            Agendados
                        </p>
                    </div>
                    
                    <div className="value">
                        <h1 className="text-white text-[3.0rem] font-bold mt-[-10px]">324</h1>
                    </div>
                </div>
                {/* Coluna 2  */}
                <div className="col-2  mt-3 bg-[url('../assets/teams_cards.svg')] bg-contain bg-no-repeat w-[180px] h-[95px]"></div>
            </div>
            {/* Segunda linha */}
            <div className="row-2 mt-1 flex items-center justify-between">
                {/* Coluna 1 */}
                <div className="graph bg-[url('../assets/week_graph.svg')] bg-contain bg-no-repeat w-[250px] h-[102px]"></div>
                {/* Coluna 2 */}
                <div className="buttom bg-[url('../assets/btn-ver-tudo.svg')] bg-contain bg-no-repeat w-[80px] h-[60px]">
                </div>
            </div>
        </div>
    )
}