import { DndProvider } from "react-dnd";
import Editor from "./pages/editor";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Flow from "./pages/flow";
import ErrorBoundary from "./common/errorBoundary/ErrorBoundary";

function App() {

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <DndProvider backend={HTML5Backend}>
                <Editor />
              </DndProvider>
            }
          />

          <Route path="/flow" element={<Flow />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
