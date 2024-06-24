import React from "react";
import { DiMongodb } from "react-icons/di";
import {
    FaBootstrap,
    FaCss3Alt,
    FaHtml5,
    FaJava,
    FaNodeJs,
    FaPython,
    FaVuejs,
} from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMysql } from "react-icons/si";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl">Skills</h1>
            <div className="my-20 flex flex-wrap justify-center gap-10">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-wrap items-center justify-center gap-4">

                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <FaJava className="text-4xl text-orange-800" />
                        </div>
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <FaPython className="text-4xl text-sky-700" />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <SiMysql className="text-4xl text-cyan-500" />
                        </div>
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <DiMongodb className="text-4xl text-green-500" />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <FaHtml5 className="text-4xl text-red-400" />
                        </div>
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <FaCss3Alt className="text-4xl text-blue-600" />
                        </div>
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <FaBootstrap className="text-4xl text-purple-500" />
                        </div>
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <RiTailwindCssFill className="text-4xl text-cyan-500" />
                        </div>
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <TbBrandJavascript className="text-4xl text-yellow-400" />
                        </div>
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <RiReactjsLine className="text-4xl text-cyan-400" />
                        </div>
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <TbBrandNextjs className="text-4xl" />
                        </div>
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <FaVuejs className="text-4xl text-green-500" />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <FaNodeJs className="text-4xl text-green-500" />
                        </div>
                        <div className="rounded-2xl border-4 border-neutral-800 p-4">
                            <SiExpress className="text-4xl text-gray-500" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Technologies;
