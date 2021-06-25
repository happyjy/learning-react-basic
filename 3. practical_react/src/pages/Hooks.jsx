import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Example1 from "../components/2.Hooks&Context/2.1 useState/eg1"
import Example2 from "../components/2.Hooks&Context/2.1 useState/eg2"
import Example3 from "../components/2.Hooks&Context/2.1 useState/eg3"
import Example4 from "../components/2.Hooks&Context/2.2 useEffect/eg4"
import Example5 from "../components/2.Hooks&Context/2.2 useEffect/eg5"
function Hooks() {
  let match = useRouteMatch();
  console.log(match.url);
  console.log(match.path);


  return (
    <>
      <h1>Hooks</h1>
      
      <ul>
        <li>
          <Link to={`${match.url}/Example1`}>Example1 - setState 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/Example2`}>Example2 - setState 2</Link>
        </li>
        <li>
          <Link to={`${match.url}/Example3`}>Example3 - setState 3</Link>
        </li>
        <li>
          <Link to={`${match.url}/Example4`}>Example4 - useEffect</Link>
        </li>
        <li>
          <Link to={`${match.url}/Example5`}>Example5</Link>
        </li>
      </ul>
      <hr></hr>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/Example1`}>
          <Example1 />
        </Route>
        <Route path={`${match.path}/Example2`}>
          <Example2 />
        </Route>
        <Route path={`${match.path}/Example3`}>
          <Example3 />
        </Route>
        <Route path={`${match.path}/Example4`}>
          <Example4 />
        </Route>
        <Route path={`${match.path}/Example5`}>
          <Example5 />
        </Route>
      </Switch>

    </>
  )
}

export default Hooks;