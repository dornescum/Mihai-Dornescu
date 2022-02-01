export const handleSidebar = (access, sidebar) => {
	access.addEventListener('click', () => {
		sidebar.classList.toggle("sidebar");
		sidebar.classList.toggle("show");
	});
};
