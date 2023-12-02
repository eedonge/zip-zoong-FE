import Image from "next/image";
import listImg from "/public/집중 배너.jpeg";
import { MdOutlineCheckCircle } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { Heart } from "../Heart/Heart";

export const Card = () => {
  return (
    <div className="flex justify-center w-80 p-5">
      <div>
        <div className="relative">
          <Image className="h-80 rounded-md" src={listImg} alt="img" />
          <div className="absolute bottom-2 right-3 ">
            <Heart />
          </div>
        </div>
        <div className="flex justify-between pt-4">
          <div className="flex items-center cursor-pointer hover:text-primary-200">
            <MdOutlineCheckCircle />
            <span className="ml-1">거래완료</span>
          </div>
          <div className="flex items-center cursor-pointer hover:text-primary-200">
            <FaRegEdit />
            <span className="ml-1">수정하기</span>
          </div>
          <div className="flex items-center cursor-pointer hover:text-primary-200">
            <FaRegTrashAlt />
            <span className="ml-1">삭제하기</span>
          </div>
        </div>
        <div>
          <div className="text-big font-semibold mt-4">월세 500 / 50</div>
          <div className="font-semibold">관리비 5만원</div>
          <div>깔끔 그 잡채</div>
        </div>
      </div>
    </div>
  );
};