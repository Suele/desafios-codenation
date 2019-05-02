const localStorageWrapper = {
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  get: key => {
    const value = localStorage.getItem(key);

    return value ? JSON.parse(value) : value;
  },
  remove: key => localStorage.removeItem(key)
};

const slugify = str =>
  str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .trim();

export { slugify, localStorageWrapper };
