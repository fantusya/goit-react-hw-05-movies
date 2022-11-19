export function makeCompaniesArray(array) {
  let companies = '';

  for (const obj of array) {
    const company = obj.name;
    if (!company) {
      continue;
    }
    if (companies) {
      companies += ', ';
    }
    companies += company;
  }
  return companies;
}
