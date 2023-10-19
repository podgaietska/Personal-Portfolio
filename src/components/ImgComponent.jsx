import { useState, useEffect } from "react";
import {Blurhash} from "react-blurhash";

function ImgComponent({src, width, height, blurhash}){
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        }
        img.src = src;
    }, [src]);

    return ( 
        <>
            <div style={{display: imageLoaded ? "none" : "inline"}} className="placeholder-img">
                <Blurhash
                    hash={blurhash}
                    width={width}
                    height={height}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1} />
            </div>
            <img
                src={src}
                alt=""
            />
        </>
    )
}

export default ImgComponent;