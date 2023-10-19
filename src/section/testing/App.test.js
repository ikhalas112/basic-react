import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
  act,
} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { getHeroDetail } from "./api";

jest.mock("./api");

const SUPERMAN = {
  id: 1,
  name: "Superman",
  avatar:
    "https://cdn.theatlantic.com/thumbor/xuePShEYRyEQec_THgWcYFhYLnw=/540x0:2340x1800/500x500/media/img/mt/2016/01/superman/original.jpg",
  description:
    "Superman is a fictional superhero. The character was created by writer Jerry Siegel and artist Joe Shuster, and first appeared in the comic book Action Comics #1 (cover-dated June 1938 and published April 18, 1938).[1] The character regularly appears in comic books published by DC Comics, and has been adapted to a number of radio serials, movies, and television shows.",
};

getHeroDetail.mockResolvedValue(SUPERMAN);

// ให้ความสำคัญกับ user ควร test ส่งที่ user จะมองเห็น หรือน่าจะกด

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks;
  });

  it("should display input & submit button", () => {
    const { getInput, getSubmit } = renderApp();
    getInput();
    getSubmit();
  });

  it("should call 'getHeroDetail' with name when submitted", async () => {
    const { runSearchJourney } = renderApp();
    await runSearchJourney("superman");
    expect(getHeroDetail).toHaveBeenCalledWith("superman");
  });

  it("should render loading while calling api", async () => {
    const { runSearchJourney } = renderApp();
    await runSearchJourney("superman", () => {
      screen.getByText("loading");
    });
    expect(getHeroDetail).toHaveBeenCalledWith("superman");
  });

  it("should render avatar, name & description from response", async () => {
    const { runSearchJourney } = renderApp();

    await runSearchJourney("superman");
    screen.getByText(SUPERMAN.name);
    screen.getByText(SUPERMAN.description);
    screen.getByAltText(`Avatar of ${SUPERMAN.name}`);
  });
});

const renderApp = () => {
  render(<App />);
  // # get vs query
  // query... ใช้ในกรณีที่จะ test ว่า DOM นั้นๆ ไม่ได้อยู่บนหน้าจอ

  // get... -> ถ้าไม่เจอ throw error
  // query... -> ถ้าไม่เจอ return null
  const getInput = () => screen.getByLabelText(/search/i); // ไม่สนใจ case sensitive 'search'
  const getSubmit = () => screen.getByRole("button", { name: /submit/i });
  return {
    getInput,
    getSubmit,
    runSearchJourney: async (name, pendingCallback) => {
      // จำลองการกระทำของ user เช่น พิมพ์
      // # fireEvent vs userEvent
      //  fireEvent.change(...) จำลองการ call แค่ onChange
      // serEvent.type(...) จำลองการ call onChange onKeyUp onKeyDown... ที่ครอบคุลมกว่า
      userEvent.type(getInput(), name);
      userEvent.click(getSubmit());
      if (pendingCallback) pendingCallback();
      await waitForElementToBeRemoved(() => screen.getByText("loading")); // คาดว่า เมื่อ api response เสร็จแล้ว loading ต้องหายไ
      //  Timed out in waitForElementToBeRemoved. หมายความว่า รอแล้ว แต่ loading ไม่หายไป (default ประมาณ 5 วิ)
    },
  };
};
