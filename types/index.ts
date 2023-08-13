import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}