export const isActive = (currentPath, targetPath) => {
  return currentPath === targetPath;
};

export const isActiveParent = (currentPath, prefixPath) => {
  return currentPath.startsWith(prefixPath);
};

export const stripHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent.replace(/\s+/g, " ").trim();
};
