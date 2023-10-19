import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import BasicTsx from "./section/tsx/BasicTsx";
import Parent from "./section/component/Parent";
import BasicHook from "./section/basic-hook/BasicHook";
import Routing from "./section/routing/Routing";
import BasicForm from "./section/form/BasicForm";
import UseMemoHook from "./section/hooks/useMemo";
import UseCallbackHook from "./section/hooks/useCallback";
import UseReducerHook from "./section/hooks/useReducer";
import UseContextHook from "./section/hooks/useContext/useContext";
import useWindowSize from "./section/hooks/useWindowSize";
import UseRefHook from "./section/hooks/useRef";
import UseSetStateHook from "./section/hooks/useSetState";
import UseFetchHook from "./section/hooks/useFetch";
import SnapShot from "./section/metal-model/SnapShot";
import UseEffectHook from "./section/hooks/useEffect";
import IndexAsKey from "./section/anti-pattern/IndexAsKey";
import NestedInternalState from "./section/anti-pattern/NestedInternalState";
import NoCleanup from "./section/anti-pattern/NoCleanup";
import Mutation from "./section/anti-pattern/Mutation";
import FunctionUpdater from "./section/anti-pattern/FunctionUpdater";
import CreationInsideComponent from "./section/anti-pattern/CreationInsideComponent";
import TestingRoot from "./section/testing/App";
import SwrRoot from "./section/swr/App";
import TicTacToe from "./section/game/TicTacToe";
import CompoundRoot from "./section/compound-components/App";

import "bootstrap/dist/css/bootstrap.css";
import "./asset/style.css";

// component tag ต้องขึ้นต้นด้วยตัวใหญ่ ถ้าไม่ React จะมองเป็น html tag

function App() {
  // const size = useWindowSize();
  // console.log({ size });
  return (
    <div style={{ padding: 10 }}>
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <ul style={{ width: "15%", padding: 0 }}>
            <li>
              <Link to="/basic-tsx">BasicTsx</Link>
            </li>
            <li>
              <Link to="/parent">Parent</Link>
            </li>
            <li>
              <Link to="/basicHook">BasicHook</Link>
            </li>
            <li>
              <Link to="/basic-form">BasicForm</Link>
            </li>
            <hr />
            <b className="pl-1">Hook</b>
            <li>
              <Link to="/use-memo-hook">UseMemoHook</Link>
            </li>
            <li>
              <Link to="/use-callback-hook">UseCallbackHook</Link>
            </li>
            <li>
              <Link to="/use-reducer-hook">UseCallbackHook</Link>
            </li>
            <li>
              <Link to="/use-context-hook">UseContextHook</Link>
            </li>
            <li>
              <Link to="/use-ref-hook">UseRefHook</Link>
            </li>
            <li>
              <Link to="/use-setstate-hook">UseSetStateHook</Link>
            </li>
            <li>
              <Link to="/use-fetch-hook">UseFetchHook</Link>
            </li>
            <li>
              <Link to="/snapshot">Snapshot</Link>
            </li>
            <li>
              <Link to="/use-effect-hook">UseEffectHook</Link>
            </li>
            <hr />
            <b className="pl-1">Anti - Pattern</b>
            {/* https://www.youtube.com/watch?v=vStERJGSuCY&list=PLLPNfc7CgMywX42iMgkLaXUzqXCvF_KLQ&index=8 */}
            <li>
              <Link to="/index-as-key">IndexAsKey</Link>
            </li>
            <li>
              <Link to="/nested-internal-state">NestedInternalState</Link>
            </li>
            <li>
              <Link to="/no-cleanup">NoCleanup</Link>
            </li>
            <li>
              <Link to="/mutation">Mutation</Link>
            </li>
            <li>
              <Link to="/function-updater">FunctionUpdater</Link>
            </li>
            <li>
              <Link to="/creation-inside-component">
                CreationInsideComponent
              </Link>
            </li>
            <hr />
            <b className="pl-1">Testing</b>
            <li>
              <Link to="/testing-library">Testing Library</Link>
            </li>
            <hr />
            <b className="pl-1">SWR</b>
            <li>
              <Link to="/swr">SWR Library</Link>
            </li>
            <hr />
            <b className="pl-1">Games</b>
            <li>
              <Link to="/tic-tac-toe">TicTacToe</Link>
            </li>
            <hr />
            <b className="pl-1">Others</b>
            <li>
              <Link to="/compound-components">Compound Components</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/basic-tsx" element={<BasicTsx />} />
            <Route path="/parent" element={<Parent />} />
            <Route path="/basicHook" element={<BasicHook />} />
            <Route path="/basic-form" element={<BasicForm />} />
            <Route path="/use-memo-hook" element={<UseMemoHook />} />
            <Route path="/use-callback-hook" element={<UseCallbackHook />} />
            <Route path="/use-reducer-hook" element={<UseReducerHook />} />
            <Route path="/use-context-hook" element={<UseContextHook />} />
            <Route path="/use-ref-hook" element={<UseRefHook />} />
            <Route path="/use-setstate-hook" element={<UseSetStateHook />} />
            <Route path="/use-fetch-hook" element={<UseFetchHook />} />
            <Route path="/snapshot" element={<SnapShot />} />
            <Route path="/use-effect-hook" element={<UseEffectHook />} />
            <Route path="/index-as-key" element={<IndexAsKey />} />
            <Route
              path="/nested-internal-state"
              element={<NestedInternalState />}
            />
            <Route path="/no-cleanup" element={<NoCleanup />} />
            <Route path="/mutation" element={<Mutation />} />
            <Route path="/function-updater" element={<FunctionUpdater />} />
            <Route
              path="/creation-inside-component"
              element={<CreationInsideComponent />}
            />
            <Route path="/testing-library" element={<TestingRoot />} />
            <Route path="/swr" element={<SwrRoot />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="/compound-components" element={<CompoundRoot />} />
          </Routes>
        </div>
      </BrowserRouter>

      {/* <BasicTsx /> */}
      {/* <Parent /> */}
      {/* <BasicHook /> */}
      {/* <Routing /> */}
      {/* <BasicForm /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      {/* <UseReducerHook /> */}
      {/* <UseContextHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseSetStateHook /> */}
      {/* <UseFetchHook /> */}
      {/* <SnapShot /> */}
      {/* <UseEffectHook /> */}
    </div>
  );
}

export default App;
