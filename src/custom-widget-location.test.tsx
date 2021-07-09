import React from "react"
import {screen, render} from "@testing-library/react"

import {CustomWidgetLocation} from "./custom-widget-location";

describe("CustomWidgetLocation", () => {
    it("should render the component", () => {
        render(<CustomWidgetLocation contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
