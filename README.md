# QuinStreet: Programming Assessment - Frontend Developer

### Package JS Contents

- Vanilla JS

### Package CSS Contents

- Normalize CSS
- SASS


----

### General requirements

- Pixel perfect (on given breakpoints)
- Cross-browser support (desktop and mobile)
- Responsive design according to provided mockups (you can use 767px as a mobile breakpoint)
- Retina support
- Any copy on the page can be changed (in the source file) and it should NOT break the page
- Background color should transition from #ECF8FB to #EFEFEF continuously with 5 sec duration: it takes 5 sec to change the color from #ECF8FB to #EFEFEF, then 5 sec from #EFEFEF to #ECF8FB, and so on
- The page should be optimized for max performance and fast loading
- "Read more" link in the bottom opens google.com in a new window

### Form requirements

- Phone field should have a mask for US phone number: (XXX) XXX-XXXX
- The form should be optimized for mobile UX (do your best)
- Add form validation:
    - "Name" field requires 2 or more chars
    - "City" and "State" are optional
    - "Phone" field is required and should have validation by mask
    - "Email" field is required
- If there's an error, the field should change the border color to #D50303
- The form should submit data to https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar via ajax (ignore any errors)
- After successful submission, change the button copy to "Submitted" and do not allow any more submissions

---

### Getting Started

Download the project. Open up the project in any CLI and run the following commands:

```
$ npm install
$ npm run dev
```

Open the Local url in your browser.