import React from "react";
import { shallow } from "enzyme";
import ItemEdit from "./ItemEdit";

describe("ItemEdit", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ItemEdit />);
    expect(wrapper).toMatchSnapshot();
  });
});
