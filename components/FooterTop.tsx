import { dataTopFooter } from "@/constant/data"



const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
       {dataTopFooter.map((item, index) => (
        <div key={index} className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors group hoverEffect">
            {item?.icon && <item.icon />}
            <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-black hoverEffect">{item?.title}</h3>
                <p className="text-sm text-gray-600 mt-1 group-hover:text-gray-900 hoverEffect">{item?.subtitle}</p>
            </div>
        </div>
       ))}
       
    </div>
  )
}

export default FooterTop