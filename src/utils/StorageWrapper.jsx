class StorageWrapper {
  constructor(type) {
    try {
      this.storage = type === 'local' ? window.localStorage : window.sessionStorage;
    } catch (error) {
      console.error(error);
    }
  }

  get length() {
    if (!this.storage) return;
    return this.storage.length;
  }

  get(key) {
    if (!this.storage) return;

    try {
      const value = this.storage.getItem(key);

      if (value === null) return;

      return JSON.parse(value);
    } catch (error) {
      console.error(error);
    }
  }

  set(key, value) {
    if (!this.storage) return;

    try {
      const stringValue = JSON.stringify(value);

      this.storage.setItem(key, stringValue);
    } catch (error) {
      console.error(error);
    }
  }

  remove(key) {
    if (!this.storage) return;

    this.storage.removeItem(key);
  }

  clear() {
    if (!this.storage) return;

    this.storage.clear();
  }
}

export const localStorageWrapper = new StorageWrapper('local');
export const sessionStorageWrapper = new StorageWrapper('session');