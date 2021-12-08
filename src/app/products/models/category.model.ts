
export enum Category {
  None = 0,
  NotNone = 1
}

export function displayCategory(category: Category | undefined) {
  if (category == null)
    return '';
  return Category[category];
}