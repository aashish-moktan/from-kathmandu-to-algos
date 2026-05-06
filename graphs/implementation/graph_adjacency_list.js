// Graph implementation using Adjacency list

const readline = require("node:readline/promises");

class Graph {
  async implementUndirectedUnweightedGraph(vertex, edges) {
    const adjLists = Array.from({ length: vertex }, () => []);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    for (let i = 0; i < edges; i++) {
      const u = Number(await rl.question("Enter start edge: "));
      const v = Number(await rl.question("Enter end edge : "));

      adjLists[u].push(v);
      adjLists[v].push(u);
    }

    rl.close();

    console.log("Adjacency lists :: ", adjLists);
  }

  async implementUndirectedWeightedGraph(vertex, edges) {
    const adjLists = Array.from({ length: vertex }, () => []);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    for (let i = 0; i < edges; i++) {
      const u = Number(await rl.question("Enter start edge: "));
      const v = Number(await rl.question("Enter end edge : "));

      adjLists[u].push(v);
      adjLists[v].push(u);
    }

    rl.close();

    console.log("Adjacency lists :: ", adjLists);
  }

  async implementDirectedUnweightedGraph(vertex, edges) {
    const adjLists = Array.from({ length: vertex }, () => []);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    for (let i = 0; i < edges; i++) {
      const u = Number(await rl.question("Enter start edge: "));
      const v = Number(await rl.question("Enter end edge : "));

      adjLists[u].push(v);
    }

    rl.close();

    console.log("Adjacency lists :: ", adjLists);
  }

  async implementDirectedWeightedGraph(vertex, edges) {
    const adjLists = Array.from({ length: vertex }, () => []);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    for (let i = 0; i < edges; i++) {
      const u = Number(await rl.question("Enter start edge: "));
      const v = Number(await rl.question("Enter end edge : "));
      const weight = Number(await rl.question("Enter weight : "));

      const vertexWeight = new Map();
      adjLists[u].push(vertexWeight.set(v, weight));
    }

    rl.close();

    console.log("Adjacency lists :: ", adjLists);
  }
}

(async () => {
  const graph = new Graph();
  //   graph.implementUndirectedUnweightedGraph(4, 4);

  //   await graph.implementDirectedUnweightedGraph(4, 4);
  await graph.implementDirectedWeightedGraph(4, 4);
})();
