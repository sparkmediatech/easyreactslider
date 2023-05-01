import { useState } from "react";
import { customHookAttributes } from "@/utilities/GlobalType";
import defaultValues from "@/component/InitialSetUp";


//state holding the slider data and managing sliding properties
export const customHook = (data: {id?: string, imageURL?: string, title?: string, subTitle?: string}[], autoAnimate: boolean)=>{
    const [sliderSetup, setSliderSetup] = useState<customHookAttributes>({
        current: 2,
        needTransition: true,
        direction: "",
        data: data,
        autoAnimate: autoAnimate
    })

    
    return {sliderSetup, setSliderSetup}
}


//toggle the auto animation state
export const customHookAnimationState=(sliderSetup: customHookAttributes,  setSliderSetup: Function)=>{
   
   //continue auto animation on mouse leave
    const toggleAnimationTrue = ()=>{
        setSliderSetup({...sliderSetup, autoAnimate: true})
    };
    //stop auto animation on mouse enter
    const toggleAnimationFalse = ()=>{
        setSliderSetup({...sliderSetup, autoAnimate: false})
    }

    return {toggleAnimationFalse, toggleAnimationTrue}
}