import { renderHook, act } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  test("Should render the initial count", () => {
    // hooks don;t have any dom element, instead renderHook will wrap the hook in a function component, invoke the hook and returns an object from which we can destructure a property
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("Should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: 10,
    });
    expect(result.current.count).toBe(10);
  });

  test("Should increment the count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  test("Should decrement the count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
