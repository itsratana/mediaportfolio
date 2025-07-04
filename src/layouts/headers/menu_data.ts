interface DataType {
	id: number;
	title: string;
	link: string;
	has_dropdown?: boolean;
	sub_menus?: {
		link: string;
		title: string;
	}[];
}
// menu data
const menu_data: DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "#hero",
		has_dropdown: false,
	},
	{
		id: 2,
		title: "About",
		link: "#about",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Services",
		link: "#service",
		has_dropdown: false,
	},
	{
		id: 4,
		title: "Projects",
		link: "#portfolio",
		has_dropdown: false,
		sub_menus: [
			{ link: "/projects", title: "Projects List" },
			{ link: "/single-project", title: "Single Portfolio" },
		],
	},
	// {
	// 	id: 5,
	// 	title: "Blog",
	// 	link: "/blog",
	// 	has_dropdown: false,
	// },
	{
		id: 5,
		title: "Contact",
		link: "#contact",
		has_dropdown: false,
	},
];
export default menu_data;
