import React from "react";

export interface IImage extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}