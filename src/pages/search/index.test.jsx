import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import Search from "."
import store from "../../store"

test('Should know searchBar', () => {
    render (
        <Provider store={store}>
            <Search />
        </Provider>
    );
    expect(screen.getByTestId("SearchBarForm")).toBeInTheDocument()
})