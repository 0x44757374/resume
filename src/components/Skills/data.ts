const languages = [
	{
		name:"TypeScript",
		icon: "typescript"
	},
	{
		name:"JavaScript",
		icon: "javascript"
	},
	{
		name:"Embedded C",
		icon: "chip"
	},
	{
		name:"PostgreSQL",
		icon: "postgres"
	},
	{
		name:"Bash",
		icon:"terminal"
	},
	// {
	// 	name:"HTML",
	// 	icon: "html"
	// },
	// {
	// 	name:"CSS",
	// 	icon: "css"
	// },
	{
		name:"C#",
		icon: "csharp"
	},
] as {name:string, icon:string}[];


const frameworks = [
	{
		name:"React & React Native",
		icon: "react"
	},
	{
		name:"SolidJS",
		icon:"solidjs"
	},
	{
		name: "Unity",
		icon: "unity"
	},
] as {name:string, icon:string}[];

const web = [
	{
		name:"GraphQL API Design",
		icon: "graphql"
	},
	{
		name:"Library Design & Packaging",
		icon: "npm"
	},
	{
		name:"Technical Documentation",
		icon: "markdown"
	},
] as {name:string, icon:string}[];

const deviceSpec = [
	{
		name:"IoT System Design",
		icon: "accesspoint"
	},
	{
		name:"Bluetooth FOTA, GATT",
		icon: "bluetooth"
	},
] as {name:string, icon:string}[];

const tools = [
	{
		name:"Docker",
		icon: "docker"
	},
	{
		name:"Git",
		icon: "git"
	},
	{
		name:"GitHub",
		icon: "github"
	},
] as {name:string, icon:string}[];

const cloud = [
	{
		name:"Cloud Hosting & Scaling",
		icon: "nginx"
	},
	{
		name:"Cloud Integration",
		icon: "cloud"
	},
	{
		name:"Microservices",
		icon: "graph"
	},
	{
		name:"Relational Databases",
		icon: "database"
	},
	{
		name: "User Authentication & Security",
		icon: "authentication"
	}
] as {name:string, icon:string}[];
// const a = [] as {name:string, icon:string}[];




export default [
	{
		name:"Cloud",
		items:cloud
	},
	{
		name:"LowLevel",
		items:deviceSpec
	},
	{
		name:"Web",
		items:web
	},
	{
		name:"Frameworks",
		items:frameworks
	},
	{
		name:"Tools",
		items:tools
	},
	{
		name:'Languages',
		items:languages
	},
];

//other
	// {
	// 	name: "Linux System Admin",
	// 	icon: "linux"
	// },
	// {
	// 	name:"Adobe Premiere Pro",
	// 	icon: "premiere"
	// },
	// {
	// 	name:"Adobe After Effects",
	// 	icon: "aftereffects"
	// },