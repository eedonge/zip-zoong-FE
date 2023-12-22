import { DatePicker } from "@/components/DatePicker/DatePicker";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioForm } from "../FormFields/radioForm";
import { SelectForm } from "../FormFields/selectForm/selectForm";
import { floorsNumber, totalFloors } from "../FormFields/selectForm/selectOption";
import { Control, FieldErrors, FieldValues } from "react-hook-form";
import { RegiFormDatas } from "../regiSchema";

type FormData = {
  roomType?: string;
  roomInfo?: string;
  cost?: string;
  selectDate?: string;
  elevator?: string;
  parking?: string;
  totalFloors?: string;
  floorsNumber?: string;
};

type OptionProps = {
  control: Control<RegiFormDatas>;
  errors: FieldErrors<FormData>;
};

export const RegiOption: React.FC<OptionProps> = ({ control, errors }) => {
  return (
    <>
      <div className="grid grid-cols-6 justify-between">
        <div className="flex justify-center items-center border">
          <div className="font-bold">입주 가능 일자</div>
        </div>
        <div className="col-span-2 p-3">
          <RadioGroup className="flex items-center col-span-3 h-16 mx-3" defaultValue="comfortable">
            <RadioForm
              name="selectDate"
              value="1"
              style="flex items-center space-x-2 mr-12"
              label="즉시 입주"
              control={control}
              errors={errors}
            />
            <RadioForm
              name="selectDate"
              value="2"
              style="flex items-center space-x-2"
              label="일자 선택"
              control={control}
              errors={errors}
            />
          </RadioGroup>
        </div>
        <div className="flex justify-center items-center">
          <DatePicker />
        </div>
      </div>
      {/*  */}
      <div className="border-t grid grid-cols-6 justify-between">
        <div className="flex justify-center items-center border">
          <div className="font-bold">층 수</div>
        </div>
        <div className="col-span-3 p-3">
          <div className="flex">
            <div className="mr-5">
              <SelectForm
                name={"totalFloors"}
                title="전체 층 수"
                placeholder="층 수 선택"
                data={totalFloors}
                control={control}
                errors={errors}
              />
            </div>
            <div>
              <SelectForm
                name={"floorsNumber"}
                title="해당 층 수"
                placeholder="해당 층 수 선택"
                data={floorsNumber}
                control={control}
                errors={errors}
              />
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border-y border-b-black grid grid-cols-6 justify-between">
        <div className="flex justify-center items-center border ">
          <div className="font-bold">추가 정보</div>
        </div>
        <div className="w-full col-start-2 col-end-7">
          <div className="grid p-3">
            <span className="font-semibold">엘리베이터</span>
            <RadioGroup
              className="flex items-center col-span-3 h-16 mx-3"
              defaultValue="comfortable"
            >
              <RadioForm
                name="elevator"
                value="1"
                style="flex items-center space-x-2 mr-12"
                label="없음"
                control={control}
                errors={errors}
              />
              <RadioForm
                name="elevator"
                value="2"
                style="flex items-center space-x-2"
                label="있음"
                control={control}
                errors={errors}
              />
            </RadioGroup>
          </div>
          {/*  */}
          <div className="grid justify-between border-t p-3">
            <span className="font-semibold">주차 가능 여부</span>
            <div className="flex">
              <RadioGroup className="flex items-center h-16 mx-3" defaultValue="comfortable">
                <RadioForm
                  name="parking"
                  value="1"
                  style="flex items-center space-x-2 w-24"
                  label="불가능"
                  control={control}
                  errors={errors}
                />
                <RadioForm
                  name="parking"
                  value="2"
                  style="flex items-center space-x-2 w-24"
                  label="가능"
                  control={control}
                  errors={errors}
                />
              </RadioGroup>
              <div className="flex items-center ml-14">
                <input className="border p-2 rounded-md" />
                <span className="ml-2">만원</span>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="grid p-3 border-t">
            <span className="font-semibold">옵션</span>
            <div className="flex justify-around items-center space-x-2">
              <div>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  냉장고
                </label>
              </div>
              <div>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  세탁기
                </label>
              </div>
              <div>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  에어컨
                </label>
              </div>
              <div>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  전자레인지
                </label>
              </div>
              <div>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  옷장
                </label>
              </div>
              <div>
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  책상
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
