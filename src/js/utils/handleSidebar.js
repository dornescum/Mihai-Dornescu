export const handleSidebar = (access, sidebar) => {
    access.addEventListener('click', () => {
        sidebar.classList.toggle("sidebar");
        sidebar.classList.toggle("show");
        sidebar.innerHTML = `
            <ul class="list-unstyled bg-white pt-4 h-100 shadow" style="width: 200px;">
                <li class="py-2 ps-3"><a href="index.html" class="text-dark text-decoration-none">Home</a></li>
                <li class="py-2 ps-3"><a href="news.html" class="text-dark text-decoration-none">News</a></li>
                <li class="py-2 ps-3"><a href="visitors.html" class="text-dark text-decoration-none">Visitors</a></li>
                <li class="py-2 ps-3"><a href="cookie-policy.html" class="text-dark text-decoration-none">Cookie Policy</a></li>
            </ul>
        `;
    });
};
