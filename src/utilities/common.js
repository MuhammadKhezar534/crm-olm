import { isUndefined } from "lodash";

export const setMenusActive = (menus, menu) => {
  const pMenus = menus.map((men) => {
    if (men.title === menu) {
      return {
        ...men,
        isActive: true,
      };
    } else
      return {
        ...men,
        isActive: false,
      };
  });

  return pMenus;
};

export const makeFirtLetterCapital = (word) => {
  if (!isUndefined(word)) {
    return word?.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
};

export const IntoComma = (amount) => {
  return amount.toLocaleString();
};
export const settabsActive = (tabs, tabName) => {
  const ptabs = tabs.map((tab) => {
    if (tab.title === tabName) {
      return {
        ...tab,
        isActive: true,
      };
    } else
      return {
        ...tab,
        isActive: false,
      };
  });

  return ptabs;
};

export const parseMenusOnMount = (menus, pathName) => {
  let pMenus;
  if (pathName !== "/") {
    pMenus = menus.map((men) => {
      if (men.to !== "/" && pathName?.includes(men.to)) {
        return {
          ...men,
          isActive: true,
        };
      } else
        return {
          ...men,
          isActive: false,
        };
    });
  } else {
    pMenus = [
      { ...menus[0], isActive: true },
      ...menus.slice(1).map((men) => {
        return { ...men, isActive: false };
      }),
    ];
  }

  return pMenus;
};
