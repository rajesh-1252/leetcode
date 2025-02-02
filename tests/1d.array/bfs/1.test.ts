import { bfs } from '../../../src/1d.array/bfs/1';

describe('Breadth-First Search (BFS)', () => {
  test('should traverse the graph in BFS order', () => {
    const graph = {
      A: ['B', 'C'],
      B: ['D', 'E'],
      C: ['F'],
      D: [],
      E: ['F'],
      F: [],
    };

    expect(bfs(graph, 'A')).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });

  test('should return only the reachable nodes', () => {
    const graph = {
      A: ['B'],
      B: ['C'],
      C: [],
      D: ['E'],
      E: [],
    };

    expect(bfs(graph, 'A')).toEqual(['A', 'B', 'C']);
  });

  test('should return the single node when no neighbors', () => {
    const graph = {
      A: [],
    };

    expect(bfs(graph, 'A')).toEqual(['A']);
  });
});
