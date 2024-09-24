function zipList(list1: unknown[], list2: unknown[]): unknown[] {
  const result: unknown[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

function zipListTheFunctionalWay(list1: unknown[], list2: unknown[]): unknown[] {
  return list1.reduce((acc: unknown[], item, index) => {
    acc.push(item, list2[index]);
    return acc;
  }, []);
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
