import  {   useState } from 'react';
import { svgobject } from '../../../../../features/HomeSlice/Components/Top_Callections/top_CallecttionSlice';



const Item = ({ icon, name,loading ,error }: { icon: svgobject; name: string,loading:boolean,error:string | null }) => {
     const [iconhover,setIconhover] = useState<boolean>(false)





  return (
    <div onMouseOver={()=> setIconhover(true)} onMouseOut={()=> setIconhover(false)} className="max-h-[158px] transform transition-all duration-200 max-w-[120px] space-y-[15px] group ">
      <figure className="relative">
        <div className="h-28 w-28 rounded-full bg-white"></div>
        {
          loading?<div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>Loading....</div>:  <svg className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] group-hover:text-white " fill={`${iconhover?"#222222":" #767676"} `} width={icon.width} height={icon.height} viewBox={icon.viewBox}  xmlns={icon.xmlns} >
          {icon.paths.map((d,id) => <path key={id} d={d} />)}
          </svg>
        }
        
        
      </figure>
      <p className="capitalize font-medium text-lg text-center group-hover:text-red-500">{error?error:name}</p>
    </div>
  );
};

export default Item;



 <svg  className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] group-hover:text-white w-[40%]" fill='green' height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512" >
          
              <path d="M76.8,230.4v230.4H256V230.4H76.8z M230.4,435.2h-128V256h128V435.2z"/>
           
            
              <path d="M512,153.6v-51.209c0-2.756-0.444-5.487-1.314-8.098l-25.6-76.791C481.604,7.049,471.817,0,460.8,0H51.2
                C40.183,0,30.396,7.049,26.914,17.502l-25.6,76.791C0.444,96.905,0,99.635,0,102.391V153.6c0,14.14,11.46,25.6,25.6,25.6v307.2
                H12.8c-7.074,0-12.8,5.726-12.8,12.8c0,7.074,5.726,12.8,12.8,12.8h486.4c7.074,0,12.8-5.726,12.8-12.8
                c0-7.074-5.726-12.8-12.8-12.8h-12.8V179.2C500.54,179.2,512,167.74,512,153.6z M460.8,25.6l21.333,64h-95.479l-16.282-64H460.8z
                M268.8,25.6h75.128l16,64H268.8V25.6z M268.8,115.2h94.72v38.4H268.8V115.2z M168.073,25.6H243.2v64h-91.128L168.073,25.6z
                M148.48,115.2h94.72v38.4h-94.72V115.2z M51.2,25.6h90.428l-16.282,64H29.867L51.2,25.6z M25.6,115.2h97.28v38.4H51.2H25.6V115.2
                z M409.6,486.4H307.2V384h25.6v-25.6h-25.6V256h102.4V486.4z M460.8,486.4h-25.6v-256H281.6v256H51.2V179.2h409.6V486.4z
                M460.8,153.6h-71.68v-38.4h97.28v38.4H460.8z"/>
           
     </svg> 