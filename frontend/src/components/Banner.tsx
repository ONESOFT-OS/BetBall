import player from '../assets/image3.png'
import shade from '../assets/image4.png'

export function Banner () {
    return (
        <div className="flex-row items-center justify-center w-[1361px] h-[542px] top-[99px] left-[183px]" >
            <div className="absolute bg-green-700 rounded-2xl w-[1361px] h-[432px] top-[209px] left-[183px]">
                <h1 className="absolute w-[799.57px] h-[51px] top-[329px] left=[241.67px]">INSCREVA-SE  E RECEBA</h1>
                <h3 className="absolute w-[799.57px] h-[51px] top-[392px] left-[241.67px]">100% BET BALLS EM BÔNUS</h3>
                <span className="absolute w-[388.86px] h=[416px] left-[870.98px] top-[209px]" ><img src={shade}/></span>
                <span className="absolute w-[530.36px] h=[541px] left-[982.57px] top-[99px]" ><img src={player}/></span>
            </div>
        </div>
    )
}