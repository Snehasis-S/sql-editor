import React, { useState, Suspense } from "react";
import "./assets/output.css";
import { Toaster } from "react-hot-toast";
import Loader from "./components/reusable/Loader";
import Nav from "./components/nav/Nav";

const Editor = React.lazy(() => import("./components/editor/Editor"));
const TableSection = React.lazy(() => import("./components/table/TableSection"));

const App = () => {
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("select * from customers");

  return (
    <>

      <Toaster
        position="top-center"
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#ffffff",
            color: "#3A4374",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#4661E6",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#D73737",
              secondary: "#ffffff",
            },
          },
        }}
      />
      <Nav />
      <div className="grid grid-cols-layout-desktop grid-rows-layout-desktop min-h-screen">
        <Suspense fallback={<Loader />}>
          <Editor
            setQuery={setQuery}
            value={value}
            setValue={setValue}
          />
          {query ? <TableSection query={query} /> : null}
        </Suspense>
      </div>
    </>
  );
};

export default App;
