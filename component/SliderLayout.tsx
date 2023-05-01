import Image from "next/image";
import defaultValues from "./InitialSetUp";
import { setUpAttributes } from "@/utilities/GlobalType";
import layoutStyle from '../styles/Layout.module.css';
import right from "../public/right.png"
import { customHook, customHookAnimationState} from "@/Hook/customHook";
import { handleSliderTranslateEnd, handleNextSlide, handlePrevSlider,  } from "@/HelperFuction/Helper_function";
import { useEffect } from "react";



export default function Layout(props: {setting: setUpAttributes}){
    const {setting} = props;

    let defaultSetting: setUpAttributes
    defaultSetting = {...defaultValues, ...setting};
      
    const {sliderSetup, setSliderSetup} = customHook(defaultSetting.data, defaultSetting.autoAnimate);
    const {toggleAnimationFalse, toggleAnimationTrue, } = customHookAnimationState(sliderSetup,  setSliderSetup)
    
 
    




const transLateVal = () => {
    return -(sliderSetup.current * 33.4);
  };


  const sliderStyle = ()=>{
    if(sliderSetup.needTransition){
        return{
            transform: `translateX(${transLateVal()}%)`,
            transition: "transform 0.3s ease-in-out"
        }
    };
    return {
        transform: `translateX(${transLateVal()}%)`
      };
  };




//handles auto animation
  useEffect(()=>{
    if(sliderSetup.autoAnimate){
        let setSlider = setInterval(()=>{
            handleNextSlide(sliderSetup, setSliderSetup)
        }, defaultSetting.delayTimer)
    
        return () => {
            clearInterval(setSlider);
          };
            
    }
   
  }, [sliderSetup.current, sliderSetup.autoAnimate, defaultSetting.delayTimer])




    return (
        <>
          <div className={layoutStyle.mainDiv}  >
                  
            <div className={layoutStyle.rightBTN} onClick={()=>handlePrevSlider(sliderSetup, setSliderSetup)}>
            <Image src={right} alt="react easy slider"
                 width="0"
                 height="0"
                 quality={100}
                 style={{height: '25px', width: '16px' }}
                />
            </div>
            <div className={layoutStyle.leftBTN} onClick={()=> handleNextSlide(sliderSetup, setSliderSetup)}>
                <Image src={right} alt="react easy slider"
                 width="0"
                 height="0"
                 quality={100}
                 style={{height: '25px', width: '16px' }}
                />
            
            </div>

            <div className={layoutStyle.customDiv} style={sliderStyle()} onTransitionEnd={()=>handleSliderTranslateEnd(sliderSetup, setSliderSetup)} onMouseEnter={toggleAnimationFalse} onMouseLeave={toggleAnimationTrue}>
                {sliderSetup.data.map((item, index)=>(
                <div key={index} className={layoutStyle.sliderDiv}>
                   
                    <Image
                        src={item.imageURL as string}
                        alt="This is a demo link"
                        width="0"
                        height="0"
                        quality={100}
                        sizes="100vw"
                        style={{height: props.setting.styleProperties.height, width: props.setting.styleProperties.width, objectFit: 'cover', }}
                    />
                </div>
              ))}  
            </div>   
              
          </div>
        </>
    )
}