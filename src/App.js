import Gantt from "./components/Gantt";
import { GanttCharDefaultStyle } from "./GanntChartStyle";
import Auth from "./pages/auth/Auth";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUser } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasksList);
  const [addChartStyle, setAddChartStyle] = useState(false);
  const { user, isFetching } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const datas = {
    data: tasks,
    links: [{ id: 1, source: 1, target: 2, type: "0" }],
  };

  return (
    <>
      {isFetching ? (
        "Loading..."
      ) : (
        <BrowserRouter>
          {addChartStyle && <GanttCharDefaultStyle />}
          <Routes>
            <Route
              path="/"
              element={user?.username ? <Home /> : <Navigate to="/auth" />}
            />
            <Route
              path="/auth"
              element={user?.username ? <Navigate to="/" /> : <Auth />}
            />
            <Route
              path="/chart"
              element={
                <Gantt tasks={datas} setAddChartStyle={setAddChartStyle} />
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
