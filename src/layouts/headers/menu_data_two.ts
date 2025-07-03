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
      title: "Event Highlight",
      link: "/service/event-highlight",
      has_dropdown: false
    },
    {
      id: 2,
      title: "Promote Video",
      link: "/service/promote-video",
      has_dropdown: false
    },
    {
      id: 3,
      title: "Photography",
      link: "/service/photography",
      has_dropdown: false
    },
    {
      id: 4,
      title: "Camera Operating",
      link: "/service/camera-operating",
      has_dropdown: false
    }
  ];

  export default menu_data;