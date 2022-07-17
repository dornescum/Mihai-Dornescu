export const handleSidebar = (access, sidebar) => {
	access.addEventListener('click', () => {
		sidebar.classList.toggle("sidebar");
		sidebar.classList.toggle("show");
		sidebar.innerHTML= `
		<ul class="w-48 rounded-br-md h-full md:h-[700px] bg-stone-50 pt-8 overflow-auto">
                <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
                    <a href="index.html" class="py-2 md:py-4">
                        Home
                    </a>
                </li>
                <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
                    <a href="reactJs.html" class="py-2 md:py-4">
                        React js
                    </a>
                </li>
                <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
                    <a href="nextJs.html" class="py-2 md:py-4">
                        Next js
                    </a>
                </li>
                <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
                    <a href="javascript.html" class="py-2 md:py-4">
                        Javascript
                    </a>
                </li>
                <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
                    <a href="typescript.html" class="py-2 md:py-4">
                        Typescript
                    </a>
                </li>
             
<!--                <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">-->
<!--                    <a href="css.html" class="py-2 md:py-4">-->
<!--                        Css-->
<!--                    </a>-->
<!--                </li>-->
            
                <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
                    <a href="tailwind.html" class="py-2 md:py-4">
                        Tailwind
                    </a>
                </li>
                <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
                    <a href="cypress.html" class="py-2 md:py-4">
                        Cypress
                    </a>
                </li>
                 <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
                    <a href="node.html" class="py-2 md:py-4">
                        Node js
                    </a>
                </li>
                <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
                    <a href="tutorials.html" class="py-2 md:py-4">
                        Tutorials
                    </a>
<!--                </li>-->
<!--                   <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">-->
<!--                    <a href="vue.html" class="py-2 md:py-4 text-zinc-300">-->
<!--                        Vue js-->
<!--                    </a>-->
<!--                </li>-->
                 </li>
                   <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12 bg-zinc-400">
                    <a href="examen.html" class="py-2 md:py-4 text-amber-700">
                       Examen 
                    </a>
                </li>
                    <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
                    <a href="scss.html" class="py-2 md:py-4 text-zinc-300">
                        Scss
                    </a>
                </li>
                
                <li class="block py-2 md:py-4 pl-4 md:pl-8  lg:pl-12">
                    <a href="javascript:;" class="py-4 hover:text-stone-50">
                        Bootstrap
                    </a>
                </li>
            </ul>
		`
	});
};
