export const achieve = 'https://achievelifeservices.org';
export const jerusalem = 'https://rememberingjerusalem.org';

export type NavItem = {
	href: string;
	label: string;
};

export const nav: NavItem[] = [
	{ href: '/', label: 'Home' },
	{ href: '/new-releases', label: 'New Releases' },
	{ href: '/kids-corner', label: 'Kids Corner' },
	{ href: '/for-the-youth-of-tomorrow', label: 'For the Youth of Tomorrow' },
	{ href: '/home-bible-studies', label: 'Material for Home Bible Studies' },
	{ href: '/for-the-intellectuals', label: 'For the Intellectuals' }
];

export type Picture = {
	src: string;
	alt: string;
	caption: string;
	width: number;
	height: number;
	focus?: string;
};

export const pictures = {
	jerusalem: {
		src: '/ancient_jerusalem.jpeg',
		alt: 'Stone walls, arches, and the southern edge of the Temple Mount in Jerusalem',
		caption: 'Jerusalem',
		width: 800,
		height: 534,
		focus: 'center 70%'
	},
	jericho: {
		src: '/ancient_jericho.jpeg',
		alt: 'Excavated mudbrick and stone ruins of Jericho, with desert mountains beyond',
		caption: 'Jericho',
		width: 1600,
		height: 1066,
		focus: 'center 60%'
	},
	qumran: {
		src: '/qumran.jpeg',
		alt: 'The ruins of Qumran on the shore of the Dead Sea',
		caption: 'Qumran',
		width: 1600,
		height: 1066
	},
	shiloh: {
		src: '/shiloh.jpeg',
		alt: 'An aerial view of the excavated remains at Shiloh',
		caption: 'Shiloh',
		width: 1024,
		height: 731
	},
	caves: {
		src: '/qumran_caves.jpeg',
		alt: 'Layered desert cliffs at Qumran, with cave openings in the rock',
		caption: 'The caves at Qumran',
		width: 1600,
		height: 1070
	},
	pilgrimage: {
		src: '/pilgrimage_road.jpeg',
		alt: 'The excavated Pilgrimage Road, a stone street preserved beneath Jerusalem',
		caption: 'The Pilgrimage Road',
		width: 1600,
		height: 1066
	},
	caesarea: {
		src: '/caesarea_philippi.jpeg',
		alt: 'A spring and waterfall at the foot of the cliff and cave of Caesarea Philippi',
		caption: 'Caesarea Philippi',
		width: 1378,
		height: 919,
		focus: 'center 40%'
	},
	scrolls: {
		src: '/dead_sea_scrolls.jpeg',
		alt: 'Two fragments of the Isaiah Scroll from the Dead Sea Scrolls, displayed under glass',
		caption: 'Dead Sea Scrolls',
		width: 1600,
		height: 1066
	},
	capernaum: {
		src: '/capernaum_ruins.jpeg',
		alt: 'Limestone ruins and palm trees at Capernaum, beside the Sea of Galilee',
		caption: 'Capernaum',
		width: 1024,
		height: 681
	},
	tunnel: {
		src: '/hezekiahs_tunnel.jpeg',
		alt: 'The rock-cut passage of Hezekiah’s Tunnel, with water along the floor',
		caption: 'Hezekiah’s Tunnel',
		width: 1024,
		height: 681,
		focus: 'center 45%'
	}
} satisfies Record<string, Picture>;
