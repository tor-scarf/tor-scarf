import { create } from "zustand";

export const useCart = create((set) => ({
  items: [],
  add: (p) => set((s) => {
    const exists = s.items.find((i)=>i.id===p.id);
    if(exists){
      return { items: s.items.map(i=> i.id===p.id? {...i, qty: i.qty+1} : i ) };
    }
    return { items: [...s.items, {...p, qty:1}] };
  }),
  remove: (id) => set((s)=> ({ items: s.items.filter(i=> i.id!==id) })),
  clear: () => set({ items: []})
}));
