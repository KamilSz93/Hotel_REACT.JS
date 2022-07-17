import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContext from "../../context/authContext";
import Menu from './menu';

test("render Zaloguj if user id null", () => {
    render(
      <Router><Menu /></Router>
    );
    const link = screen.getByText(/Zaloguj/i);
    expect(link).toBeInTheDocument();
});
