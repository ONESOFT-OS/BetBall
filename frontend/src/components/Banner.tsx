import player from '../assets/image3.png'
import shade from '../assets/image4.png'

export function Banner () {
    return (
        <section className="destaque flex items-center justify-center w-[100vw] h-[50vh] mt-20 p-16 mb-10">
            <div className="img bg-[url('../assets/destaque-image.png')] bg-contain bg-no-repeat w-[90vw] h-[80vh]"></div>
        </section>
    )
}