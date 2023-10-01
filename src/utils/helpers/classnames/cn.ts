type ClassNamesParams = Array<Record<string, unknown> | string | boolean | undefined | null>;

export const cn = (...classNames: ClassNamesParams) => {
  const result = [] as string[];

  for (let i = 0; i < classNames.length; i += 1) {
    const currentItem = classNames[i];
    const isObject =
      typeof currentItem === 'object' && !Array.isArray(currentItem) && currentItem !== null;

    if (isObject) {
      const classNameArray = Object.keys(currentItem);

      classNameArray.forEach((className) => {
        const currentClassName = currentItem[className];

        if (!!currentClassName && typeof currentClassName === 'string') {
          result.push(currentClassName);
        }
      });
    }

    if (!!currentItem && typeof currentItem === 'string') {
      result.push(currentItem);
    }
  }

  return result.join(' ');
};
