import { ReactElement } from "react";
import style from "./Image.module.scss";

type ImageProps = {
    src: string;
    alt?: string;
}

export default function Image(props: ImageProps): ReactElement {
    return (
        <img className={style.image} src={props.src} alt={props?.alt}/>
    )
}
