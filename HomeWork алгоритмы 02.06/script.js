// Итеративный подход:

function hanoiTowerIterative(n, source, auxiliary, destination) {
    const stack = [];
    stack.push({ n, source, auxiliary, destination });
  
    while (stack.length > 0) {
      const { n, source, auxiliary, destination } = stack.pop();
  
      if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
      } else {
        stack.push({ n: n - 1, source, auxiliary: destination, destination: auxiliary });
        stack.push({ n: 1, source, auxiliary, destination });
        stack.push({ n: n - 1, source: auxiliary, auxiliary: source, destination });
      }
    }
  };


// Рекурсивный подход:

function hanoiTowerRecursive(n, source, auxiliary, destination) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${destination}`);
    } else {
      hanoiTowerRecursive(n - 1, source, destination, auxiliary);
      console.log(`Move disk ${n} from ${source} to ${destination}`);
      hanoiTowerRecursive(n - 1, auxiliary, source, destination);
    }
  }