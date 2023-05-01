import { customHookAttributes } from "@/utilities/GlobalType";
import { customHookAnimationState } from "@/Hook/customHook";


//To control switch case instances
const DIRECTIOM_TYPE = {
    next: "NEXT",
    prev: "PREV"
  };


//To run each time the animation ends using the onTransitionEnd react event
export const handleSliderTranslateEnd = (sliderSetup: customHookAttributes, setSliderSetup: Function)=>{
    console.log("handleSliderTranslateEnd");
    const { direction } = sliderSetup;

    

    switch(direction){
        case DIRECTIOM_TYPE.next:
            end_nextSlider(sliderSetup, setSliderSetup);
            break;

         case DIRECTIOM_TYPE.prev:
            end_prevSlider(sliderSetup, setSliderSetup);
        break;
        default:
        break;
    }

};

//function to call when the slider ends on prev count
export const end_prevSlider = (sliderSetup: customHookAttributes, setSliderSetup: Function)=>{
    const { current, data } = sliderSetup;
    let _current = current;
    _current += 1;
   
    const _sliderData = [...data.slice(-1), ...data].slice(0, data.length);
    setSliderSetup({...sliderSetup,
        needTransition: false,
        current: _current,
        data: _sliderData,
        
    });
};


//function to call when slider reaches the end of next count
export const end_nextSlider = (sliderSetup: customHookAttributes, setSliderSetup: Function)=>{
    const { current, data } = sliderSetup;
    let _current = current;
    _current -= 1;

    const _sliderData = [...data, ...data.slice(0, 1)].slice(- data.length);
    setSliderSetup({...sliderSetup,
        needTransition: false,
        current: _current,
        data: _sliderData,
        
    });
};


//controls the next button
export const handleNextSlide = (sliderSetup: customHookAttributes, setSliderSetup: Function)=>{
    const { current, data } = sliderSetup;
   
    let _current = current + 1;
    
    if (_current > data.length - 3) return;

    setSliderSetup({...sliderSetup,
        needTransition: true,
        current: _current,
        direction: DIRECTIOM_TYPE.next
        
    });
};


//controls the prev button functionality
export const handlePrevSlider = (sliderSetup: customHookAttributes, setSliderSetup: Function)=>{
    const { current, data } = sliderSetup;
   
    let _current = current - 1;
    if (_current < 0) return;

    setSliderSetup({...sliderSetup,
        needTransition: true,
        current: _current,
        direction: DIRECTIOM_TYPE.prev
        
    });
};


