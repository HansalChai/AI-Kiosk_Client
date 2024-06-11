// src/store/cartStore.ts
import create from 'zustand';

interface CartItem {
  name: string;
  options: string[];
  price: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  clearItems: () => void; // 장바구니를 비우는 메서드 추가
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item],
    })),
  removeItem: (index) =>
    set((state) => ({
      items: state.items.filter((_, i) => i !== index),
    })),
  clearItems: () =>
    set(() => ({
      items: [],
    })),
}));

export default useCartStore;
