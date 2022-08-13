import { shallowMount } from "@vue/test-utils";
import GameView from "@/views/GameView.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(GameView);
    expect(wrapper.text()).toMatch("Game View");
  });
});
