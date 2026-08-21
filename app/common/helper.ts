// Helper types and functions; use anywhere

export type Empty = Record<string, never>;

export function choice<T>(arr: T[]): T { 
    return arr[Math.floor(Math.random() * arr.length)]; 
}
