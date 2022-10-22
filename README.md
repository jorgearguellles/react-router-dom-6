# React Router DOM 6

React Router Dom 6 have 3 types of routes:

1. **Browser Router:** Its navigation works by **Slash /** that indicate in which page of the application we are. We use this if we have a location of another HTML loaded in the backend, if it is not found it returns a 404 Error.
2. **Hast Router:** Its navigation works by **Slash Hashes and Slash /#/**, this can be used to render content guided by the hashes thanks to JavaScript. This does not take us out of the index.html, this is useful to create SPA pages.
3. **Memory Router:** It works by **Path Array** that tells us which path we are on and render that content. It is often used for mobile applications to switch views.

## useParams
