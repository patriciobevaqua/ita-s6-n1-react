import React from "react";
import { Paragraph } from "./styled";
import phrases from "./Phrases";


export default function Escena(props) {

    const paragraph = phrases.map(frase => {
        return (
            <div key={frase.id}>
                <Paragraph active={props.numEscena === frase.id}>{frase.text}</Paragraph>
            </div>
        )
    })

    return (
        <div>
            {paragraph}
        </div>
    )




    // return (

    //     <h3> 
    //          <Paragraph active={props.numEscena === frase.id}> {props.frase} </Paragraph>
    //     </h3>

    // )





}
