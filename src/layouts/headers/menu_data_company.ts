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

const menu_data: DataType[] = [
    {
      id: 1,
      title: "VFC",
      link: "/company/vfc",
      has_dropdown: false
    },
    {
      id: 2,
      title: "Kia Cambodia",
      link: "/company/kia-cambodia",
      has_dropdown: false
    },
  ];

  export default menu_data;