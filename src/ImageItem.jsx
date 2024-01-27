import React from "react";
import "./styles.css";
import { ShowImage } from "./ImageContext";
export default function ImageItem() {
    return (
        <ShowImage>
            <ShowImage.Toggle></ShowImage.Toggle>
                <ShowImage.List>
                    <ShowImage.Item>Edit</ShowImage.Item>
                    <ShowImage.Item>Delete</ShowImage.Item>
                </ShowImage.List>
        </ShowImage>
    );
}