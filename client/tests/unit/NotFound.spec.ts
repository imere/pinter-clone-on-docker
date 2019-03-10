import { shallowMount } from "@vue/test-utils";
import NotFound from "@/components/NotFound/NotFound.vue";

describe("NotFound.vue", function() {
  it("render .el-col", function() {
    const wrapper = shallowMount(NotFound, { sync: false });
    expect(wrapper.find("el-col").text()).toMatch("Not Found");
  });
});
