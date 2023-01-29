import React from "react";

interface Props {
  img: string;
  name: string;
  comment: string;
}

const Comments: React.FC<Props> = ({ comment, img, name }) => {
  return (
    <div className="flex gap-3">
      <img
        src={img}
        alt="profile"
        className="rounded-full w-14 h-14 object-cover"
      />
      <div className="basis-11/12 flex flex-col bg-light rounded p-2">
        <h1 className="font-medium text-lg">{name}</h1>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comments;
