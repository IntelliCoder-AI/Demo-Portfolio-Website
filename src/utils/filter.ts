/**
 * Filters items by category
 */
export function filterByCategory<T>(
  items: T[],
  category: string,
  getCategoryFn: (item: T) => string
): T[] {
  if (!category || category.toLowerCase() === 'all') {
    return items;
  }
  return items.filter(
    (item) => getCategoryFn(item).toLowerCase() === category.toLowerCase()
  );
}

/**
 * Filters items by search query
 */
export function filterBySearch<T>(
  items: T[],
  query: string,
  getSearchFieldsFn: (item: T) => string[]
): T[] {
  if (!query) {
    return items;
  }
  
  const searchTerms = query.toLowerCase().split(' ').filter(Boolean);
  
  return items.filter((item) => {
    const fields = getSearchFieldsFn(item).map((f) => f.toLowerCase());
    return searchTerms.every((term) =>
      fields.some((field) => field.includes(term))
    );
  });
}

/**
 * Filters items by both category and search query
 */
export function filterItems<T>(
  items: T[],
  options: {
    category?: string;
    search?: string;
    getCategoryFn: (item: T) => string;
    getSearchFieldsFn: (item: T) => string[];
  }
): T[] {
  let result = items;

  if (options.category) {
    result = filterByCategory(result, options.category, options.getCategoryFn);
  }

  if (options.search) {
    result = filterBySearch(result, options.search, options.getSearchFieldsFn);
  }

  return result;
}
