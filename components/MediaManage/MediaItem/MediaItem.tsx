import React from "react";
import Card from "../../Card/Card";
import FileCategory from "../../FileCategory/FileCategory";
import CardItem from "./CardItem";

const MediaItem = (props: any) => {
  console.log(props);
  return (
    <Card>
      <div className="d-flex justify-content-between mb-4">
        <p>
          All <i className="fa-solid fa-angle-right"></i>
          <span>Folder1</span>
          <i className="fa-solid fa-angle-right"></i>
          <span>Folder2</span>
        </p>
        <div className="d-flex gap-3">
          <button className="rounded-pill btn btn-outline-primary px-4">
            Group Registration
          </button>
          <button className="rounded-pill btn btn-primary px-4">
            Device Registration
          </button>
        </div>
      </div>
      <FileCategory />

      <CardItem />
      {/* <SelectedFlies/> */}
    </Card>
  );
};

export default MediaItem;
