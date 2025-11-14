"use client";
import { useState } from "react";

const sessionSlots = {
    Morning: ["07:00 AM", "08:00 AM", "10:00 AM", "11:00 AM"],
    Afternoon: ["12:00 PM", "01:00 PM", "03:00 PM", "04:00 PM"],
    Evening: ["05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"],
    Night: ["09:00 PM", "10:00 PM", "11:00 PM"],
};

export default function SessionTimeModal({ onClose, onConfirm }) {
    const [selectedTime, setSelectedTime] = useState(null);

    return (
        <div className="absolute top-[178px] w-[390px] h-[666px] bg-white shadow-lg rounded-t-2xl overflow-y-auto z-50 slide-up">

            <div className="flex items-center justify-between w-[390px] h-[39.93px] px-[8px] py-[16px] gap-[8px]">
                <span className="font-quicksand font-semibold text-[16px] leading-[100%] text-black text-center w-[150px]">
                    Select Session Time
                </span>
                <button
                    className="w-[24px] h-[24px] text-black"
                    onClick={onClose}
                >
                    ✕
                </button>
            </div>


            <div className="w-[356px] h-[560.96px] mt-[12px] mx-[16px] flex flex-col gap-[12px]">
                {Object.keys(sessionSlots).map((period) => (
                    <div
                        key={period}
                        className="w-[356px] h-[118.86px] bg-white bg-opacity-50 rounded-[12px] p-[16px] flex flex-col gap-[12px]"
                    >

                        <div className="flex justify-between items-center w-[328px] h-[36px]">
                            <span className="font-quicksand font-semibold text-[16px] text-black">
                                {period}
                            </span>
                        </div>


                        <div className="flex flex-wrap gap-[10px] w-[324px] h-[38.86px]">
                            {sessionSlots[period].map((slot) => (
                                <button
                                    key={slot}
                                    className={`w-[70px] h-[38.86px] rounded-[8px] border border-[#CC627B] flex items-center justify-center text-black ${selectedTime === slot ? "bg-[#CC627B] text-white" : ""
                                        }`}
                                    onClick={() => setSelectedTime(slot)}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-[358.22px] h-[45.5px] mx-auto mt-[12px] flex gap-[12px]">

                <button
                    className="w-[173px] h-[45px] bg-gray-400 rounded-[8px] opacity-50 text-white font-quicksand font-semibold"
                    onClick={onClose}
                >
                    Cancel
                </button>


                <button
                    className="w-[173px] h-[45px] bg-purple-600 rounded-[8px] text-white font-quicksand font-semibold"
                    onClick={() => {
                        if (selectedTime) onConfirm(selectedTime);
                    }}
                >
                    Confirm
                </button>
            </div>
        </div>
    );
}
