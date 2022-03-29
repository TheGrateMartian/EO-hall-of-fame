import React, {useEffect, useRef} from 'react';

interface props {
    file: any;
    pImg1: pImg;
    pImg2: pImg;
    pImg3: pImg;
}

interface pImg {
    height?: string;
    top: string;
    right: string;
    speed: number;
    icon: any;
}

function Image(props: props){
    const image = useRef<HTMLImageElement>(null);
    const pImg1 = useRef<HTMLImageElement>(null);
    const pImg2 = useRef<HTMLImageElement>(null);
    const pImg3 = useRef<HTMLImageElement>(null);


    useEffect(() => {
        if (image && image.current) {
            const windowWidth = window.innerWidth / 5;
            const windowHeight = window.innerHeight / 5;

            document.addEventListener('mousemove', (e: { clientX: number; clientY: number; }) => {
                const mouseX = e.clientX / windowWidth;
                const mouseY = e.clientY / windowHeight;
                image.current!.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
                pImg1.current!.style.transform = `translateX(${mouseX*props.pImg1.speed}px) translateY(${mouseY*props.pImg1.speed}px)`
                pImg2.current!.style.transform = `translateX(${mouseX*props.pImg2.speed}px) translateY(${mouseY*props.pImg2.speed}px)`
                pImg3.current!.style.transform = `translateX(${mouseX*props.pImg3.speed}px) translateY(${mouseY*props.pImg3.speed}px)`
            });
        }
    }, [image]);

    return (
        <div>
            <>
                <img style={{width: props.pImg1.height, right: props.pImg1.right, top: props.pImg1.top}} className={'pImg'} src={props.pImg1.icon} ref={pImg1}  alt={''}/>
                <img style={{width: props.pImg2.height, right: props.pImg2.right, top: props.pImg2.top}} className={'pImg'} src={props.pImg2.icon} ref={pImg2}  alt={''}/>
                <img style={{width: props.pImg3.height, right: props.pImg3.right, top: props.pImg3.top}} className={'pImg'} src={props.pImg3.icon} ref={pImg3}  alt={''}/>
            </>
            <img className={'bgImg'} ref={image} src={props.file}  alt={""}/>
        </div>
    )
}

export default Image;
