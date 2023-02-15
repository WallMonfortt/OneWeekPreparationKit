function bfs(n: number, m: number, edges: number[][], s: number): number[] {
    const adjList: number[][] = new Array(n + 1).fill(0).map(() => []);
    for (let i = 0; i < m; i++) {
      const [u, v] = edges[i];
      adjList[u].push(v);
      adjList[v].push(u);
    }
  
    const visited: boolean[] = new Array(n + 1).fill(false);
    const distances: number[] = new Array(n + 1).fill(-1);
  
    const queue: number[] = [s];
    visited[s] = true;
    distances[s] = 0;
  
    while (queue.length > 0) {
      const node = queue.shift();
      if (node !== undefined) {
        for (let i = 0; i < adjList[node].length; i++) {
          const neighbor = adjList[node][i];
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            distances[neighbor] = distances[node] + 6;
            queue.push(neighbor);
          }
        }
      }
    }
  
    return distances.slice(1).filter((distance) => distance !== 0);
  }
  