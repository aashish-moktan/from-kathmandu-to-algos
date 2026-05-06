const readline = require("readline/promises");

// Add your graph implementation here

class GraphUsingAdjacencyMatrix {
  async representUnweightedUndirectedGraph(vertex, edges) {
    const adjMatrix = Array.from({ length: vertex }, () =>
      new Array(vertex).fill(0),
    );

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    for (let i = 0; i < edges; i++) {
      const start = Number(await rl.question("Enter start edge: "));
      const end = Number(await rl.question("Enter end edge : "));

      adjMatrix[start][end] = 1;
      adjMatrix[end][start] = 1;
    }

    rl.close();

    console.log("Graph :: ", adjMatrix);
  }

  async representUnweightedDirectedGraph(vertex, edges) {
    const adjMatrix = Array.from({ length: vertex }, () =>
      new Array(vertex).fill(0),
    );

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    for (let i = 0; i < edges; i++) {
      const start = Number(await rl.question("Enter start edge: "));
      const end = Number(await rl.question("Enter end edge : "));

      adjMatrix[start][end] = 1;
    }

    rl.close();

    console.log("Graph :: ", adjMatrix);
  }

  async representWeightedUndirectedGraph(vertex, edges) {
    const adjMatrix = Array.from({ length: vertex }, () =>
      new Array(vertex).fill(0),
    );

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    for (let i = 0; i < edges; i++) {
      const start = Number(await rl.question("Enter start edge: "));
      const end = Number(await rl.question("Enter end edge : "));
      const weight = Number(await rl.question("Enter weight : "));

      adjMatrix[start][end] = weight;
      adjMatrix[end][start] = weight;
    }

    rl.close();

    console.log("Graph :: ", adjMatrix);
  }

  async representWeightedDirectedGraph(vertex, edges) {
    const adjMatrix = Array.from({ length: vertex }, () =>
      new Array(vertex).fill(0),
    );

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    for (let i = 0; i < edges; i++) {
      const start = Number(await rl.question("Enter start edge: "));
      const end = Number(await rl.question("Enter end edge : "));
      const weight = Number(await rl.question("Enter weight : "));

      adjMatrix[start][end] = weight;
    }

    rl.close();

    console.log("Graph :: ", adjMatrix);
  }
}

(async () => {
  const graph = new GraphUsingAdjacencyMatrix();
  //   await graph.representUnweightedUndirectedGraph(4, 4);
  //   await graph.representUnweightedDirectedGraph(4, 4);
  //   await graph.representWeightedUndirectedGraph(4, 4);
  //   await graph.representWeightedDirectedGraph(4, 4);
})();
