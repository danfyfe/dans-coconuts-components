// @ts-nocheck
import { render } from "@testing-library/react";
import UL from ".";

describe('UL', () => {
  it('does not error when children are LI elements', () => {
    const component = () => render(
      <UL>
        <li></li>
        <li></li>
      </UL>
    );
    expect(component).toBeDefined();
  });

  it('errors when children are not LI elements', () => {
    const component = () => render(
      <UL>
        <p></p>
        <p></p>
      </UL>
    );
    expect(component).toThrow();
  });

  it('errors when one child is not an LI element', () => {
    const component = () => render(
      <UL>
        <li></li>
        <p></p>
      </UL>
    );
    expect(component).toThrow();
  });

  it('errors when there are no children', () => {
    const component = () => render(
      <UL>
      </UL>
    );
    expect(component).toThrow();
  });
});