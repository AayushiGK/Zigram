import { searchPipe } from "./search-pipe.pipe";

describe('searchPipe', () => {
    // This pipe is a pure, stateless function so no need for BeforeEach
    const pipe = new searchPipe();
  
    it('Search for Cocktail "ff" gives "Affair"& "Affinity"', () => {
      expect(pipe.transform('ff')).toEqual( "Affair & Affinity");
    });

  });