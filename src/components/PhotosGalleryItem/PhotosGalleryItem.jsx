import { GridItem } from "..";
import style from "./PhotosGalleryItem.module.css";
export const PhotosGalleryItem = ({ src, alt, color, openModal }) => {
  return (
    <GridItem>
      <div
        className={style.thumb}
        style={{ backgroundColor: color, borderColor: color }}
      >
        <img
          onClick={() => openModal(src.large, alt)}
          src={src.large}
          alt={alt}
        />
      </div>
    </GridItem>
  );
};
