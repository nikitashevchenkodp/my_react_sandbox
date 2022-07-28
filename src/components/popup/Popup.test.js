import { render, screen } from "@testing-library/react"
import Popup from "./Popup"


describe('<Popup/>', () => {
    it('to match snapshot', () => {
        const {container} = render(
            <Popup/>
        )
        expect(container).toBeInTheDocument()
        expect(container).toMatchSnapshot()
        const trigger = screen.getByTestId('popup-btn');
        expect(trigger).toBeInTheDocument()
        expect(screen.getByTestId('popup')).toBeInTheDocument()
    })
})