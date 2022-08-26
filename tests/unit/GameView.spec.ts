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
    expect(board.text()).toContain("X");
  });

  it("paints 'X' on board after click", async () => {
    const wrapper = mount(GameView);
    const field = wrapper.find("div.board div");

    await field.trigger("click");

    expect(field.text()).toContain("X");
  });
});
