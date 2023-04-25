export const filteredProjects = (access, itemProjects, page = 0) => {
	access.innerHTML = itemProjects.map((item) => {
		if (item.linkPage === '') {
			return `
		<div class="flex flex-col mx-0 md:mx-6 lg:mx-8" data-testid=${item?.id}>
                <div class="clip">
                    <div class="bg-slate-50">
                        <img alt="picture" loading="lazy"
                             src=${item?.img} class="h-60 md:h-48 lg:h-96 w-full object-cover rounded-tr-md rounded-tl-md
                shadow-sm hover:shadow-lg cursor-pointer transition duration:300 cursor-not-allowed 
                brightness-50 hover:brightness-100
               ">
<!--                contrast-50 grayscale hover:contrast-100 hover:grayscale-0-->
                    </div>
                    <div class="bg-slate-50 border p-1 rounded-br-md rounded-bl-md h-80 md:h-90 lg:h-72 relative">
                        <article class="text-stone-500" data-testid=${item?.title.slice(0, 3)}>
                            <h2 class="text-center font-bold p-1">${item?.title} </h2>
                             <p class="px-2 py-2 leading-relaxed">Description: ${item?.description}</p>
                             <p class="px-2 py-2 text-sm">${item?.tagTutorial === true ? "Tutorial" : ""}</p>
                            <ul class="text-justify md:text-lg absolute bottom-0">
                                <li class="py-2 px-2 hover:text-red-300 cursor-pointer">Tools: ${item?.tools}</li>
                                <li class="py-2 px-2">
                                    <div>
                                        <p  class="inline-flex">
                                            Repository:
                                        </p>
                                        <a href=${item?.linkRepo} target="_blank" rel="noopener" class="inline-flex">Github</a>
                                    </div>
                                </li>
                                <li class="pt-2 px-2 pb-4">
                                    <a href='javascript:;'  rel="noopener" class="text-stone-700 animate-pulse">
                                    <span class="text-2xl font-bold text-black"> No </span>website just a repo</a>
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
		`;
		}
		return `         
	        <div class="flex flex-col mx-0 md:mx-6 lg:mx-8" data-testid=${item?.id}>
                <div class="">
                    <div>
                    <a href=${item?.linkPage} target="_blank">
                    <img alt="picture" loading="lazy"
                             src=${item?.img} class="h-60 md:h-48 lg:h-96 w-full object-cover rounded-tr-md rounded-tl-md
                shadow-sm hover:shadow-lg cursor-pointer transition duration:300
                brigthness-100  md:brightness-95 md:hover:brightness-100 ">
                    </a>
                        
                    </div>
                    <div class="border p-1 rounded-br-md rounded-bl-md h-80 md:h-90 lg:h-72 relative">
                        <article class="text-stone-500" data-testid=${item?.title.slice(0, 3)}>
                            <h2 class="text-center font-bold p-1">${item?.title}</h2>
                            <p class="px-2 py-2 leading-relaxed">Description: ${item?.description}</p>
                            <p class="px-2 py-2 text-sm">${item?.tagTutorial === true ? "Tutorial" : ""}</p>

                            <ul class="text-justify md:text-lg absolute bottom-0">
                                <li class="py-2 px-2 hover:text-red-300 cursor-pointer">Tools: ${item?.tools}</li>
                                <li class="py-2 px-2">
                                    <div>
                                        <p  class="inline-flex">
                                            Repository:
                                        </p>
                                        <a href=${item?.linkRepo} target="_blank" rel="noopener" class="inline-flex">Github</a>
                                    </div>
                                </li>
                                <li class="pt-2 px-2 pb-4">
                                    <a href=${item?.linkPage} target="_blank" rel="noopener" class="text-stone-700 animate-pulse">Link: Visit website</a>
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
	 `;
	}).join(' ');
};
