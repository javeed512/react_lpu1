import { fireEvent, render , screen} from "@testing-library/react";
import Counter from "../components/Counter";


it("testing counter component",()=>{

        render(<Counter />)

  const  plusButton =      screen.getByTestId("plusId");
  const  minusButton =      screen.getByTestId("minusId");


            fireEvent.click(plusButton);
            fireEvent.click(plusButton);

    const countValue = screen.getByTestId("countId");

        expect(countValue).toHaveTextContent("2");


});