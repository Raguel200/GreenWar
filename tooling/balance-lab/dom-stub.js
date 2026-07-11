"use strict";
/* Stub DOM minimal pour exécuter le script du prototype GreenWar hors navigateur.
   Ne simule que ce que le prototype utilise réellement :
   getElementById, createElement, innerHTML/textContent, classList, style,
   appendChild, onclick, disabled, scrollTop/scrollHeight. */
function makeElement(id) {
  const el = {
    id: id || "",
    innerHTML: "",
    textContent: "",
    className: "",
    style: {},
    disabled: false,
    scrollTop: 0,
    scrollHeight: 0,
    onclick: null,
    children: [],
    classList: {
      _set: new Set(),
      add(c) { this._set.add(c); },
      remove(c) { this._set.delete(c); },
      toggle(c, v) { if (v === undefined) { this._set.has(c) ? this._set.delete(c) : this._set.add(c); } else if (v) this._set.add(c); else this._set.delete(c); },
      contains(c) { return this._set.has(c); },
    },
    appendChild(child) { this.children.push(child); return child; },
    remove() {},
    click() {},
    setAttribute() {},
  };
  return el;
}
function makeDocument() {
  const byId = new Map();
  return {
    getElementById(id) {
      if (!byId.has(id)) byId.set(id, makeElement(id));
      return byId.get(id);
    },
    createElement(tag) { return makeElement(""); },
    body: makeElement("body"),
  };
}
module.exports = { makeDocument, makeElement };
