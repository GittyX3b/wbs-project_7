# WBS-Project 7: Art Gallery

2 days solo mini project closing educational frontend part

<br/>

![screencast-frontend.gif](https://github.com/GittyX3b/wbs-project_7/blob/main/screencast-frontend.gif)

<br/>
<br/>

## Description:

Your task is to create an Art Institute Explorer application. The goal is to create a tool for searching the Art Institute of Chicago’s collection, saving favourite artworks to a personal gallery, and adding notes.

[Art Institue of Chicago API](https://api.artic.edu/docs/)

This project will help you practise integrating a third-party API, validating data with Zod, and building a dynamic user interface with React and TypeScript.

<br/>

### ⌛ Duration: 2 days (Full Time) / 5 Days (Part Time)

### 📈 Presentation: TBD by Instructor | Mandatory

<br/><br/>

## 📝 Project Requirements:

[x] React + Vite (TypeScript) Setup Scaffold a new project with npm create vite@latest my-app -- --template react-ts

[x] Install Core Dependencies Add Zod via npm install zod.

[x] Artwork Zod Schema Create ArtworkSchema covering at least id, title, artist_title, image_id, with sensible defaults for missing data.

[x] API Fetch with Validation Implement a helper that queries the AIC search endpoint, parses the JSON, and validates it with ArtworkSchema. Reject or handle invalid data.

[] Search Interface Create a search interface that allows users to query the API.

[x] ArtworkCard Component Build a reusable ArtworkCard component to display individual pieces of art from the search results. This component will show the image, title, and artist.

[] Gallery Component Develop a Gallery component that will display the collection of artworks the user has saved.

[] Create — Add to Gallery When the user clicks “Add to Gallery,” push the artwork object into localStorage.

[] Read — Display Gallery Ensure Gallery shows every saved artwork using ArtworkCard

[] Update — Notes per Artwork Allow users to add / edit a short text note on each saved artwork; validate this note with a simple Zod schema.

[] Delete — Remove from Gallery Provide a control to delete an artwork (and its note) from gallery state.

[] Type-Safe State Maintain TypeScript types throughout components and state, re-using the Zod-inferred types where possible.

<br/><br/>

### 🤓 Tips for Effective Planning

- Daily stand-ups: Use them to keep your instructor in the loop about blockers and to share insights with your classmates.
- Keep things tidy and in order: You won’t find a Trello board here, but you can create one on your own!
- ASK FOR HELP: If you’re stuck for more than 30 minutes, don’t hesitate to reach out for assistance!

This mini-project is a perfect chance to deepen your React + TypeScript skills while crafting something inspiring. By building an Art Institute Explorer from the ground up, you’ll sharpen your understanding of API integration, data validation with Zod, and state-driven UI patterns—all while curating a personal gallery of masterpieces. You’ll juggle fetching, validating, and persisting data, design a clean, responsive interface, and empower users to add notes that make each artwork their own. Dive in, unleash your creativity, and enjoy every brushstroke of the process. You’ve got this—happy coding! 🎨🚀

<br/>
