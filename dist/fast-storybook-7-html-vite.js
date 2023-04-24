import { FASTTextField as t, textFieldTemplate as n, FASTButton as a, buttonTemplate as s } from "@microsoft/fast-foundation";
class d extends t {
}
const o = d.define({
  name: "fast-text-field",
  template: n()
});
class l extends a {
}
const f = l.define({
  name: "fast-button",
  template: s()
});
export {
  f as Button,
  o as TextField
};
