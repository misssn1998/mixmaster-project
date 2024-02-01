1. install router from npm 
2. create folder pages inside src to contain all different pages layout
3. create HomeLayout component = this is the main page
4. create basic router and return RouterProvider inside App.jsx
5. create components: About, Cocktail, Error, HomeLayout, Landing, Newsletter, index.js
6. export all components from index.js by named export
7. import all pages into App.jsx
8. create nested routes for HomeLayout route in App.js
9. render <Outlet/> in HomeLayout under navbar
10. creating components folder to hold all other components
11. create Navbar component, has NavLink to Home, About and Newsletter
12. import styled components to use <Wrapper></Wrapper>
13. finish adding h3 and p for About page
14. doing Error page => using useRouteError() => having 2 cases: error.status === 400 / other cases
15. fetch data from url 
16. create loader for Landing page: response await links + searchTerm
17. 
- create pages/SinglePageError.jsx
- export import (index.js)
- use it in App.jsx
18. 
- in src/components create SearchForm, CocktailList, CocktailCard
- render SearchForm and CocktailList in Landing
- pass drinks, iterate over and render in CocktailCard
19. return all information in CocktailCard using useOutletContext()

