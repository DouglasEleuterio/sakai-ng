export class Sort {
  field: string | undefined;
  order: string | undefined;
}

export function toOrder(order: number): string {
  if (order < 0) {
    return 'desc';
  }
  return 'asc';
}

export function fromOrder(order: string): number {
  if (order === 'desc') {
    return -1;
  }
  return 1;
}
