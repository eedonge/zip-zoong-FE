import React from "react";
import DaumPostcode, { Address } from "react-daum-postcode";

interface PostPropsType {
  setAddress: React.Dispatch<React.SetStateAction<string>>; // 받는곳에서 타입지정
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const Post: React.FC<PostPropsType> = ({ setAddress, setPopup }) => {
  const complete = (data: Address) => {
    let fullAddress = data.address;

    setAddress(fullAddress);
    setPopup(false);
  };

  const postCodeStyle = {
    width: "30rem",
    padding: "7px",
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-full z-30 bg-modal flex justify-center items-center">
      <div className="bg-white relative pt-12 rounded-md">
        <button
          className="absolute top-0 right-3 text-lg text-gray-400"
          onClick={() => setPopup(false)}
        >
          X
        </button>
        <DaumPostcode style={postCodeStyle} autoClose onComplete={complete} />
      </div>
    </div>
  );
};

export default Post;
