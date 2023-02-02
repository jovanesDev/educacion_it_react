import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  darkModeOnFn,
  lightModeOnFn,
  toastOnFn,
} from "../../redux/actions/layoutActions";
import Toast from "../Toast/Toast";
import "./Layout.css";

const Layout = ({ children }) => {
  const { darkMode, lightMode, toast } = useSelector((store) => store.layout);
  const dispatch = useDispatch();

  const dispatchDarkModeFn = () => {
    dispatch(darkModeOnFn());
    dispatch(toastOnFn("Entraste a DarkMode"));
  };

  const dispatchLightModeFn = () => {
    dispatch(lightModeOnFn());
    dispatch(toastOnFn("Entraste a LightMode"));
  };


  return (
    <div
      className={`${
        lightMode ? "redux_layout_LIGHT_MODE_ON" : "redux_layout_DARK_MODE_ON"
      }`}
    >
      {toast.visible && <Toast titulo={toast.titulo} />}
      <div className="darkMode_button_container">
        {lightMode && (
          <button onClick={() => dispatchDarkModeFn()}>Dark Mode</button>
        )}
        {darkMode && (
          <button onClick={() => dispatchLightModeFn()}>Light Mode</button>
        )}
      </div>
      {children}
    </div>
  );
};

export default Layout;
