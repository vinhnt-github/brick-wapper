import configColor from './../../assets/containts/configColor';
import styled from 'styled-components';

interface TextProps {
    element?: "p" | "span"|'raw',
    color?: "primary" | "seconds" | "white" | "success" | "pending" | "error" | "tab",
    size?: "normal" | "large" | "big" | "tiny" | "label",
    text: string,
    textRaw?: string,
    fontWeight?: "initial" | "bold" | "normal" | "500",
    textTransform?: "initial" | "capitalize" | "uppercase"
}
const ColorText = {
    "primary": configColor.colorPrimary,
    "white": configColor.colorWhite,
    "seconds": configColor.colorPending,
    "success": configColor.colorSuccess,
    "error": configColor.colorError,
    "pending": configColor.colorPending,
    "tab": configColor.colorTab
}

const sizeText = {
    "normal": "1em",//16
    "large": "1.56em",//25
    "big": "3.12em",//50
    "tiny": "12px",//15
    "label": "0.875em"//14
}
// const sizeTextTable = {
//     "normal": "1em",//16
//     "large": "20px",//25
//     "big": "40px",//50
//     "tiny": "12px",//15
//     "label": "0.875em"//14
// }
// const sizeTextMobile = {
//     "normal": "1em",//16
//     "large": "20px",//25
//     "big": "30px",//50
//     "tiny": "12px",//15
//     "label": "0.875em"//14
// }
const PEl = styled.p`
    line-height:1.4;
`
export const Text = ({element = "p", color = 'primary', text, size = "normal", textRaw, fontWeight = "normal", textTransform = "initial", ...props}:TextProps) => {

};
