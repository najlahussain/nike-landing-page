import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
        <div className="flex justify-start mt-8 gap-2.5">
            <img src={star} alt="ratings" width={20} height={20}/>
            <p className="leading-normal  font-montserrat text-slate-gray text-xl">(4.5)</p>
        </div>
        <h3 className="text-2xl font-palanquin mt-2 font-semibold leading-normal">{name}</h3>
        <p className="mt-2 text-2xl font-montserrat text-coral-red font-semibold leading-normal">{price}</p>    
    </div>
  )
}

export default PopularProductCard