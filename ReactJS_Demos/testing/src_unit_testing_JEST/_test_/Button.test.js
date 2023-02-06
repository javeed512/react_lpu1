import { fireEvent, render , screen } from "@testing-library/react";
import Button from "../components/Button";


test("testing login button",()=>{

        render(<Button />)

    const loginButton =    screen.getByTestId("bid");

                fireEvent.click(loginButton);

               expect(loginButton).toHaveTextContent("Login");


});