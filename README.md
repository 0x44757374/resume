# SolidJS Resume Template
> A WebApp Resume Template built in SolidJS - Printable as PDF.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Editing The Template](#editing-the-template)
	- [Editing Content](#editing-content)
	- [Editing Layout](#editing-layout)
	- [Editing Style](#editing-style)
	- [Adding Custom Icons](#adding-custom-icons)
3. [Printing Resume](#printing-resume)
4. [Deploying](#deploying)
	- [Via Github](#deploying-with-github)
	- [Personal Server](#deploying-on-personal-server)
___


# Getting Started

### Install Dependencies

```bash 
npm install
``` 

### Run Template In Developer Mode
```bash
npm run dev
```

<strong> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.</strong>
</br>
</br>

[<h2>👆 Back to Top</h2>](#solidjs-resume-template)
___ 

# Editing the template
The app is rendered from tsx with css modules. ( All css modules are located in [`src/Resume.module.css`](src/Resume.module.css) )
- <strong>`Core Layout`</strong> | General resume layout
	- Set in [`src/Resume.tsx`](src/Resume.tsx)
	- Styles in [`src/Resume.module.css`](src/Resume.module.css)
- <strong>`Section layout`</strong> |  Layout for each underlined section (`ie, Profile, Experience...`)
	- Set in [`src/components/<Name_of_Section>/index.tsx`](src/components)
	- Styles in [`src/Resume.module.css`](src/Resume.module.css)
	- Each folder consists of:
		1. `index.tsx` : TypeScript element, holding the structure of the component
		2. `data.ts` : Typescript object representing the data fed into the component (ie, name: "Dustin Sobrero")


[<h2>👆 Back to Top</h2>](#solidjs-resume-template)
___ 

## Editing Content
> (Text, Icons, Ordering)

Section content is set from its associated data object(s) (`data.ts`)
- Sections with lists are set from arrays. 
- Adding, removing, reordering, or modifying the data will be reflected in the resume.
- Icons are set as text with a lookup on [`src/components/Icons/index.tsx`](src/components/Icons/index.tsx)
	- > Note: If an icon that you want is not listed here, it can be added here as a component.

`Example:` Editing Contact info (Adding a phone number)

> [`src/components/Contact/data.ts`](src/components/Contact/data.ts)
```ts
//Before
export default [
  {
    link:"mailto:0x44757374@gmail.com",
    icon:"email",
    text:"0x44757374@gmail.com"
  },
  {
    link:"https://github.com/0x44757374/",
    icon: "github",
    text: "0x44757374"
  }
];
```
```ts
//After
export default [
  {
    link:,"tel:123-456-7890",
    icon:"phone",
    text:"(123)456-7890"
  },
  {
    link:"mailto:0x44757374@gmail.com",
    icon:"email",
    text:"0x44757374@gmail.com"
  },
  {
    link:"https://github.com/0x44757374/",
    icon: "github",
    text: "0x44757374"
  }
];
```

[<h2>👆 Back to Top</h2>](#solidjs-resume-template)
___ 

## Editing Layout
Document elements can be modified, moved, or removed. 
- The base layout's style is set to adjust for general expected layouts.
	- >  If user changes do not render appropriately, changes to the style module may be needed.

`Example:` Placing the section, `Education` before `Skills`

> [`src/Resume.tsx`](src/Resume.tsx)
```tsx
//Original
const Resume = () =>
<div class={styles.resume}>
  <Header />
  {/* Section of resume below the header */}
  <div class={styles.body}>
    {/* Section of resume body on right-hand side */}
    <div class={styles.right}>
      <Profile />
      <Experience />
    </div>
    {/* Section of resume body on left-hand side */}
    <div class={styles.left}>
      <Contact />
      <Skills /> 
      <Education /> {/* Move this before skills */}
      <Interests />
    </div>
  </div>
</div>
```
```tsx
//Updated
const Resume = ()=>
<div class={styles.resume}>
  ...
	<div class={styles.left}>
		<Contact />
		<Education /> {/* This will appear in the list before skills, now */}
		<Skills /> 
		<Interests />
	</div>
  ...
</div>
```

[<h2>👆 Back to Top</h2>](#solidjs-resume-template)
___ 

## Editing Style
Styles are <strong>ALL</strong> set in the Resume.module.css file.
- Styles affect how the document layout **appears**.
- When editing layout, the resulting styles may need to be adjusted.

`Example:` Changing font to black

> [`src/Resume.module.css`](src/Resume.module.css)
```css
/*~~~~~~~ Top-level styling ~~~~~~~*/
html {
  background-color:rgb(184, 184, 183);
  /* color:rgb(90, 101, 113);  previous color*/
  color:black;
}
```
___

`Example:` Changing Header ( Name, Title ) from a *column* to a *row*

Find the component that you want to adjust.
> [`src/components/Header`](src/components/Header/index.tsx)
```tsx
//Note that the Header component is styled with the Resume.modules.css style, ".header"
export const Header  = ()=>{
	return <header class={styles.header}>
	<h1>{info.name}</h1>
	<h3>{info.title}</h3>
</header>
}
```

Edit the component's referenced style.
> [`src/Resume.module.css`](src/Resume.module.css)
```css
/* Previous */
.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align:center;
  border-bottom-width:4px;
  border-bottom-style:outset;
}
```

```css
/* New */
.header {
  display: flex;
  /* flex-direction: column; */
  /* justify-content: flex-start; */
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  
  text-align:center;
  border-bottom-width:4px;
  border-bottom-style:outset;
}

.header * {
  margin:0;
  padding:0;
}
```

[<h2>👆 Back to Top</h2>](#solidjs-resume-template)
___ 


## Adding Custom Icons
Icons are key-mapped functions that return inline svg's from [`src/components/Icons`](src/components/Icons/index.tsx)

- To add an icon, find or create an inline svg
- Open the `icons` component file
- Add a named function to the icons object
- Edit the inline svg to consist of only a viewbox (square, preferrably), and a reference to the function's style.
- Edit each path within the svg, and set the fill to 'currentColor', (or 'white' for paths that need to be background color).

`example:` Adding a custom icon
> [`src/components/Icons/index.tsx`](src/components/Icons/index.tsx)
```tsx
const icons = {
// ... Other icons. Just add new icon below, or avove.

  customIconName:({style}:IconSVGProps)=> <svg style={style} viewBox="0 0 24 24"><path fill="currentColor" d="... rest of path..."/></svg>,

} as {[key:string]:({style}:IconSVGProps)=>any};
```
This icon will now be usable in any existing components, or anywhere as an import via `<Icon name="customIconName" />`
> [`src/components/Skills/data.ts`](src/components/Skills/data.ts)
```ts
export default [
	//... other skills. Just add new skill in desired position
	{
		icon:"customIconName",
		name:"Custom Skill Name"
	},
	// ... rest of skills
];

```

[<h2>👆 Back to Top</h2>](#solidjs-resume-template)
___

# Printing Resume
Run + Open webpage, and print page as pdf.
- Move cursor to edge of page so that `:hover` css is not active.
- Open Print menu
	- Save as: PDF
	- Layout: Portrait
	- Paper size: Letter
	- Margins: None
	- Scale: Default
	- Options: 
		- Background Graphics: unchecked

[<h2>👆 Back to Top</h2>](#solidjs-resume-template)
___



# Deploying
Builds into static html & assets. 

This is set to deploy via script to github, but can be deployed to any webserver, from the `dist` folder.

```bash
npm run build
```

## Testing Build
- Build project: `npm run build`
- Serve build: `npm run serve`
- Open  [http://localhost:4173](http://localhost:4173) in browser.

[<h2>👆 Back to Top</h2>](#solidjs-resume-template)
___ 

## Deploying With github 

- Create your own repository, using this as a template.
- Enable github pages.
- Run github pages deploy script whenever you want to publish changes.

```bash
npm run deploy
```

🎉 Congratulations!! 🎉
You should have your own fancy web resume that's printable as a pdf!!

[<h2>👆 Back to Top</h2>](#solidjs-resume-template)
___ 


## Deploying on Personal Server

After building project, you can serve the dist folder to any status site provider, or host it yourself! 🎉

[<h2>👆 Back to Top</h2>](#solidjs-resume-template)
___ 