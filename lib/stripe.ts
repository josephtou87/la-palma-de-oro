export const stripe = {
  checkout: {
    sessions: {
      create: async (opts) => { console.log('mock stripe', opts); return { id: 'mock_session_1' } }
    }
  }
};
