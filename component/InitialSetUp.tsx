
import { setUpAttributes } from "@/utilities/GlobalType";
import { customHookAnimationState } from "@/Hook/customHook";


const defaultValues: setUpAttributes ={
    data: [
        {
        id: '1m',
        imageURL: 'https://res.cloudinary.com/blognodeapi/image/upload/v1668194175/nodeblog/vigsaylnpgcdmgexw4gy.jpg',
        title: 'This is Title1',
        subTitle: 'This is subtitle'
        },

         {
        id: '2m',  
        imageURL: 'https://res.cloudinary.com/blognodeapi/image/upload/v1668193766/nodeblog/vcwru1wnjv8fpgwlnv8s.jpg',
        title: 'This is Title2',
        subTitle: 'This is subtitle2'
        },

        {
            id: '3m',
            imageURL: 'https://res.cloudinary.com/blognodeapi/image/upload/v1668193476/nodeblog/awzawtssxnvaxgdmfgsb.jpg',
            title: 'This is Title3',
            subTitle: 'This is subtitle3'
            },

         {
            id: '4m',
            imageURL: 'https://res.cloudinary.com/blognodeapi/image/upload/v1668175673/nodeblog/ledk4ioecvu50yd8wxxg.jpg',
            title: 'This is Title4',
            subTitle: 'This is subtitle4'
        },

        {
            id: '5m',
            imageURL: 'https://res.cloudinary.com/blognodeapi/image/upload/v1668174978/nodeblog/umgt0zjbrpzcwu11ktbv.jpg',
            title: 'This is Title5',
            subTitle: 'This is subtitle5'
        },

        {
            id: '6m',
            imageURL: 'https://res.cloudinary.com/blognodeapi/image/upload/v1668174869/nodeblog/ykdptkoure4l66wwb1ub.jpg',
            title: 'This is Title6',
            subTitle: 'This is subtitle6'
        },

        {
            id: '7m',
            imageURL: 'https://res.cloudinary.com/blognodeapi/image/upload/v1668194439/nodeblog/hthe6ssls8tfsqakraet.jpg',
            title: 'This is Title7',
            subTitle: 'This is subtitle7'
        },
    ],
    loopStatus: true,
    animtionType: 'slide',
    styleProperties: {height: '400px', width: '33%'},
    delayTimer: 3000,
    autoAnimate: true

}
   
   




export default defaultValues;