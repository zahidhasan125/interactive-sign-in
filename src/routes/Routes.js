import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import VerificationCode from "../components/VerificationCode/VerificationCode";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <LoginForm />
            },
            {
                path: '/step-2',
                element: <VerificationCode />
            }
        ]
    }
])