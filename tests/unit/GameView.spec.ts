import { mount, shallowMount } from "@vue/test-utils";
import GameView from "@/views/GameView.vue";

describe("GameView.vue", () => {
  it("renders page", () => {
    const wrapper = shallowMount(GameView);
    expect(wrapper.text()).toMatch("Game View");
  });

  it("renders board", () => {
    const wrapper = mount(GameView);
    const board = wrapper.find("div.board");
    expect(board.text()).toContain("_");
  });

  it("paints 'X' on board after click", async () => {
    const wrapper = mount(GameView);
    const field = wrapper.find("div.board div");

    await field.trigger("click");

    expect(field.text()).toContain("X");
  });

  it("should toggle between 'X' and 'O' while clicking fields", async function () {
    const wrapper = mount(GameView);
    const [firstField] = wrapper.findAll("div.board div");

    expect(firstField.text()).toContain("_");

    await firstField.trigger("click");
    expect(firstField.text()).toContain("X");

    await firstField.trigger("click");
    expect(firstField.text()).toContain("O");
  });
});
