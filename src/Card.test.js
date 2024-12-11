import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

// Smoke test
it("renders without crashing", function () {
    render(
        <Card
            caption="Test caption"
            src="test.jpg"
            currNum={1}
            totalNum={3}
        />
    );
});

// Snapshot test
it("matches snapshot", function() {
    const { asFragment } = render(
        <Card
            caption="Test caption"
            src="test.jpg"
            currNum={1}
            totalNum={3}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

