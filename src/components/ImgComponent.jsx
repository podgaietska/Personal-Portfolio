import { useState, useEffect } from "react";
import {Blurhash} from "react-blurhash";

function ImgComponent({src, blurhash}){
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        }
        img.src = src;
    }, [src]);

    return ( 
        <div style={{ width: '100%', height: '100%' }}>
            <div style={{display: imageLoaded ? "none" : "inline",  width: '100%', height: '100%'}}>
                <Blurhash
                    hash={blurhash}
                    width="100%"
                    height="100%"
                    resolutionX={32}
                    resolutionY={32}
                    punch={1} />
            </div>
            <img
                src={src}
                alt=""
                loading="lazy"
            />
        </div>
    )
}

export default ImgComponent;