import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Form from "./Form"

describe('<Form/>', () => {
    it('to match snapshot',() => {
        const {container} = render(<Form/>);
        expect(container).toMatchSnapshot()
    })

    it('type in inputs', () => {
       const {container, debug} = render(<Form/>);

       const nameInput = screen.getByTestId('name');
       const lastNameInput = screen.getByTestId('lastName');
       const phoneInput = screen.getByTestId('phone');
       const adressInput = screen.getByTestId('adress');
       const emailInput = screen.getByTestId('email');
       //We typed correct data o the input, and button will be enable
       userEvent.type(nameInput, 'Nikita')
       userEvent.type(lastNameInput, 'Shevchenko')
       userEvent.type(phoneInput, '37102216280')
       userEvent.type(adressInput, 'Dnipro')
       userEvent.type(emailInput, 'nrcnekita@i.ua')
       expect(document.querySelector('[data-testid="btn"]').disabled).toEqual(false)
       debug()
    })

    it('test disabled button', () => {
        const {container, debug} = render(<Form/>);
        //We didnt type in any fiel, and button will be disabled
        expect(document.querySelector('[data-testid="btn"]').disabled).toBe(true)
        debug()
    })
})