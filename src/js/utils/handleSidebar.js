export const handleSidebar = (access, sidebar) => {
    access.addEventListener('click', () => {
        sidebar.classList.toggle("sidebar");
        sidebar.classList.toggle("show");
        sidebar.innerHTML = `
            <ul class="list-unstyled bg-white pt-4 overflow-auto h-100 shadow" style="width: 200px;">
                <li class="py-2 ps-3"><a href="index.html" class="text-dark text-decoration-none">Home</a></li>
                <li class="py-2 ps-3"><a href="scss.html" class="text-dark text-decoration-none">Angular</a></li>
                <li class="py-2 ps-3"><a href="reactJs.html" class="text-dark text-decoration-none">React js</a></li>
                <li class="py-2 ps-3"><a href="nextJs.html" class="text-dark text-decoration-none">Next js</a></li>
                <li class="py-2 ps-3"><a href="node.html" class="text-dark text-decoration-none">Node js</a></li>
                <li class="py-2 ps-3"><a href="tutorials.html" class="text-dark text-decoration-none">Python</a></li>
                <li class="py-2 ps-3"><a href="javascript.html" class="text-dark text-decoration-none">Javascript</a></li>
                <li class="py-2 ps-3"><a href="typescript.html" class="text-dark text-decoration-none">Typescript</a></li>
                <li class="py-2 ps-3"><a href="php.html" class="text-dark text-decoration-none">PHP</a></li>
                <li class="py-2 ps-3"><a href="cypress.html" class="text-dark text-decoration-none">Cypress</a></li>
                <li class="py-2 ps-3 bg-secondary bg-opacity-25">
                    <a href="examen.html" class="text-warning text-decoration-none">Examen JQuery</a>
                </li>
            </ul>
        `;
    });
};
