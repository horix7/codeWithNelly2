import { Fragment } from "react";

export default function imageBox (props) {
    return (
        <Fragment>
            <div onClick={() => {
                window.open(props.url, "_blank")
            }} className="imageHolder">
                <img src={props.image} width="300px" alt=""/>
                <p>{props.description}</p>
            </div>
        </Fragment>
    )
}