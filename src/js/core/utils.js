export const qs = (sel, el = document) => el.querySelector(sel);
export const qsa = (sel, el = document) => [...el.querySelectorAll(sel)];
export const el = (tag, attrs = {}) => Object.assign(document.createElement(tag), attrs);
