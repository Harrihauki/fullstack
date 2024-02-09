```mermaid
sequenceDiagram
  participant browser
  participant server

  activate browser
  Note right of browser: Browser adds note to notes and re-renders the page
  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa : {content: "...", date: "..."}
  deactivate browser

  activate server
  Note left of server: Server saves the note
  server-->>browser: 201 Created
  deactivate server
```
