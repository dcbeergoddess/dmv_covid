# GROUP NARR Project_01

<!-- playing around for badges -->

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/dcbeergoddess/project_01)

## Description

The team decided to work on creating a website related to the Covid-19 pandemeic and providing the user with current and local information while also bringing a fun aspect to balance out the grim details regarding the pandemic. 


## User Story

Get detailed, up to date information regarding the Covid-19 pandemic on each state in the DMV area. On the main page user can also search other states using abbrevation code of state and return the appropriate data for any state. These searches will not be saved to local storage. When user refreshes they will be provided again for the local DMV states.

Home and State pages have a dark mode option as well. This will be saved to local storage for the user when they change between pages. 

Main page will provide visitor with facts from trusted api sources that gets updated on the regular for DC, MD, and VA when they first enter the page.

Individual state pages will provide visitor with more details related to DC, MD and VA.
- View when the page was last updated
- View a chart of the number of positive cases
- See how many patients have been tested.
- See the percentage of those tested that were positive.
- View the States Executive Order.
- View live twitter feed from the states Department of Health. 

Take a break from the scary facts with
**“Escape from Reality”**:
- Take a breather and enjoy some comic relief. 
- Use this space to help take your mind off of things. 
- Having a panic attack? You aren’t alone! We are here to help. Click for pictures of CATS!!! 
- Do you want to help out but aren’t sure what you can do? We have resources.
- Have questions? Check out the FAQ Links and other support links


## Trello Link
[Manage NARR Group Tasks](https://trello.com/invite/b/dBNdVUVs/ca5539805af6ee3d365b73815284aa73/gwu-project-1)

## Credits

### Collaborators
* [@noah](https://github.com/nmhayne) :tiger: ![GitHub followers](https://img.shields.io/github/followers/nmhayne?label=Follow&style=social)
* [@afton](https://github.com/aftongauntlett) :cat: ![GitHub followers](https://img.shields.io/github/followers/aftongauntlett?label=Follow&style=social)
* [@rachel](https://github.com/dcbeergoddess) :dog: ![GitHub followers](https://img.shields.io/github/followers/dcbeergoddess?label=Follow&style=social)
* [@raymond](https://github.com/rayfor1) :dragon_face: ![GitHub followers](https://img.shields.io/github/followers/rayfor1?label=Follow&style=social)


### API Resources

**Covid By State**
https://covidtracking.com/api

**Cat API**
https://thecatapi.com/

### New Technology Resources

* **moment.js**
    * used for changing dates called from API
* **chart.js**
    * Getting Started with Chart.js: [Traversy YouTube](https://www.youtube.com/watch?v=sE08f4iuOhA)
* **flexbox** 
    * worked better for us to display data instead of CSS grid
    * ("`<div class="d-flex justify-content-center flex-wrap"></div>`")
    * [Flex Resource](https://getbootstrap.com/docs/4.0/utilities/flex/)

### FAQ LINKS

* [DC General](https://coronavirus.dc.gov/page/covid-19-faqs)
* [DC Unemployment](https://does.dc.gov/page/unemployment-compensation)
* [MD General](https://coronavirus.maryland.gov/#FAQ)
* [MD Unemployment](https://www.dllr.state.md.us/employment/uicovidfaqs.shtml)
* [VA General](http://www.vdh.virginia.gov/coronavirus/frequently-asked-questions/)
* [VA Unemployment](https://www.vec.virginia.gov/faqs/general-unemployment-insurance-questions)


### Fun Links

* [Relaxing Game](https://www.addictinggames.com/embed/html5-games/23807)
* [Folding at Home](https://foldingathome.org/covid19/)
* [Print 3D Masks](https://www.3dsystems.com/covid-19-response)




## Pseudo Code

1. Creating initial webpage with DMV covid resources
   - with nav bar
2. website design with bootstrap/css
    - design how input all three states on main page
    - use 3 cards from bootstrap
3. pulling info from covid API
     - Can grab most recent covid values by state
    - "https://covidtracking.com/api/states?state=DC"
    - "https://covidtracking.com/api/states?state=MD"
    - "https://covidtracking.com/api/states?state=VA"
4. push info in cards
    - decide what info to include
5. pulling info from covid API - current uptodate 
6. display info on main page
7. comic relief page with more covid resources/survival 
    1. include cat api
    2. faq links
    3. support links
    4. fun game

## License

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)





