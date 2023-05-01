



export interface setUpAttributes{
    data: {id?: string,imageURL?: string, title?: string, subTitle?: string}[]
    loopStatus: boolean
    animtionType: 'opacity' | 'slide'
    styleProperties: {height: string, width: string}
    delayTimer: number
    autoAnimate: boolean

}


export interface customHookAttributes{
    current: number
    needTransition: boolean
    direction: string
    data:  {id?: string,imageURL?: string, title?: string, subTitle?: string}[]
    autoAnimate: boolean
}