import React from "react";

export default function Headers(props:any){
    return (
        <div className={'w-full h-16 border-b border-[#8E05C2]  bg-slate-800 bg-opacity-60  fixed top-0 left-0 z-50'}>
            <div className="w-full max-w-6xl mx-auto flex items-center justify-between h-full">
                <div className="flex items-center gap-4">
                    <div className={'w-10 h-10  relative'}>
                        <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#FFC0D3] shadow-xl z-[11]">

                        </div>
                        <div className="absolute bottom-0 left-0 w-9 h-9 rounded-full bg-[#FF5C8D] shadow-xl z-[10]">

                        </div>

                    </div>
                    <h1 className={'text-white font-bold  text-2xl font-roboto'}>Thin-Next</h1>
                </div>
                <div className="flex-none">
                    <button className={'px-8 py-1.5 text-sm text-poppins rounded-full text-white bg-purple-400'}>Login</button>
                </div>
            </div>

        </div>
    )
}
