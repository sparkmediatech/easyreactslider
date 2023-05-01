import Layout from "@/component/SliderLayout"
import defaultValues from "@/component/InitialSetUp";
import { setUpAttributes } from "@/utilities/GlobalType";




export default function Home() {
  
  const setting: setUpAttributes = {
    data: defaultValues.data,
    loopStatus: defaultValues.loopStatus,
    animtionType: defaultValues.animtionType,
    styleProperties: {height: defaultValues.styleProperties.height, width: '100%'},
    delayTimer: defaultValues.delayTimer,
    autoAnimate: defaultValues.autoAnimate
  }



  return (
    <>
     <div>
       <Layout setting={setting}/>
     </div>
    </>
  )
}
