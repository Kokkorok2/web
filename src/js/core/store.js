export class Store {
  constructor(initial = {}) {
    this.state = initial;
    this.subs = new Set();
  }
  get() { return this.state; }
  set(patch) {
    this.state = { ...this.state, ...patch };
    this.subs.forEach(fn => fn(this.state));
  }
  subscribe(fn) {
    this.subs.add(fn);
    return () => this.subs.delete(fn);
  }
}
