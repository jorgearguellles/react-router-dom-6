import { HashRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./Menu";
import { Home } from "./Home";
import { BlogPage } from "./BlogPage";
import { BlogPost } from "./BlogPost";
import { ProfilePage } from "./ProfilePage";

function App() {
  return (
    <>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>

          <Route path="/profile" element={<ProfilePage />} />

          {/* path="*" Have to be at least */}
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
