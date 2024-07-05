import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import "./index.scss";
import Form from "./pages/Form.jsx";
import Login from "./pages/Login.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import PageNotFound from "./components/PageNotFound.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ListBooks from "./pages/ListBooks.jsx";
import UpdateBook from "./pages/UpdateBook.jsx";

const router = createBrowserRouter([
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "add-book",
                element: <Form />,
            },
            {
                path: "list-books",
                element: <ListBooks />,
            },
            {
                path: "edit-book/:id",
                element: <UpdateBook />,
            },
        ],
    },

    {
        path: "*",
        element: <PageNotFound />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
