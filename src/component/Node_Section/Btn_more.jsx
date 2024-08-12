import React from "react";


const ButtonMore = ({url}) => {

    return (
        <a href={url}
        className="mx-auto mt-10"
        >
            <button
                className="border border-sky-500 px-5 dark:border-[#58A6AB] p-2 rounded-3xl mt-5 hover:bg-slate-700 w-fit my-auto">
                <h3 className="text-lg font-sans font-normal text-sky-500 dark:text-[#58A6AB]">See More</h3>
            </button>
        </a>

    )

}


export default ButtonMore;